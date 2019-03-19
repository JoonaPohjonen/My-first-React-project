import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
                                                                                //alhaalla .map avulla käydään läpi lista propseista.
                                                                                //Key = {todo.id}, hankkiutuu eroon errorista consolissa.
class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
