import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      paddingBottom: '150px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'       //if - else lause toisin kirjoitettuna.
    }
  }
                                                                                //alhaalla lähettää todo propsin title componentin todos tiedostoon.
  render() {
    return (
        <div style={this.getStyle()}>
          <img className="kitten" src="http://placekitten.com/200/200" alt="cute kitten"/>
          <div>
            <p>{ this.props.todo.title }</p>
            <p>
              { this.props.todo.description }
              <a className='linkki' href={ this.props.todo.filename }>
                View
              </a>
            </p>
          </div>
        </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem