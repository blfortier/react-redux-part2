 //a functional component, no state
 
 import React from 'react';
 
 const Todos = ({todos, deleteTodo}) => {
     
     //store the list of todo items
     const todoList = todos.length ? (
         todos.map(todo => {
             return (
                 // React expects a unique key on every surrounding element that is returned from
                 // the map function, when being output to the DOM
                <div className = "collection-item" key = {todo.id}>
                    <span onClick = {() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
         })
         ) : (
         <p className = "center">You have no todo's left, yay!</p>
    )
     return (
         <div className = "todos collection">
            {todoList}
         </div>
    )
 }
 
 export default Todos;
 
