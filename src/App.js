import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';                                                             //Globaali css tiedosto projektille.
import axios, {AxiosRequestConfig as res} from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {                                                         //näin voidaan näyttää json dataa statessa kirjoittamalla isoa koodia ylemmäs stateen.
    fetch('http://media.mw.metropolia.fi/wbma/media')
    .then(response => {
      return response.json();
    })
    .then(data => {
      let tama = data;
      let newData = JSON.stringify(data);
      console.log(newData);
      let iidee = data[1].file_id;
      console.log(iidee);

      Promise.all(data.map(item => {
        return fetch('http://media.mw.metropolia.fi/wbma/media/' + item.file_id).
            then(response => {
              return response.json();
            });
      })).then(items => {
        console.log(items);
        this.setState({ todos: items })
        // save items to state
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
                                                                                //tekee todosta propsin.
export default App;


//Tämä tiedosto on itse appi. Täällä luodaan mitä sivulla halutaan näyttää.