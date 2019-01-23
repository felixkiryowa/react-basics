import  React from 'react';
import TodoItem from './TodoItem';

function Checkboxes() {
    return (
      <div className="todo-list">
        <TodoItem />
        <TodoItem /> 
        <TodoItem /> 
        <TodoItem /> 
      </div>
    )
}


export default Checkboxes;