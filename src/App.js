import React, { Component } from 'react';
import Todos from './Todos';

//Parent 
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  // A function to delete a todo item. Must be in this file
  // because it has to interact with the state
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState ({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className = "center blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo} />
      </div>
    );
  }
}

export default App;
