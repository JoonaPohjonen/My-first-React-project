import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';                                                             //Globaali css tiedosto projektille.
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {                                                         //näin voidaan näyttää json dataa statessa kirjoittamalla isoa koodia ylemmäs stateen.
    axios.get('/test.json')
        .then(res => this.setState({ todos: res.data }))
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