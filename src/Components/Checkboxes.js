import  React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

// function Checkboxes() {

//    const task = todosData.map(todo => {
//     return <TodoItem  key= {todo.id} todo_detail= {todo.text} completed={todo.completed} />
//    })
//     return (
//       <div className="todo-list">
//          {task}
//       </div>
//     )
// }

class Checkboxes extends React.Component {

  constructor() {
    super();
    const task = todosData.map(todo => {
      return <TodoItem  key= {todo.id} todo_detail= {todo.text} completed={todo.completed} />
     })

     this.state = {
       tasks:task
     }
  }

  // constructor(height, width) {
  //   super();
  //   this.height = height;
  //   this.width = width;
  // }
  
  // doubleHeight(height) {
  //   return height **2;
  // }
 
  // calcArea = () => {
  //   return this.height * this.width;
  // }


  render() {
    // Create an object of Checkbox class
    // const area = new  Checkboxes(10, 10);
    // const new_height = this.doubleHeight(2);
   
    return (
      <div className="todo-list">
         {/* {area.calcArea()}<br></br> */}
         {/* {new_height} */}
         {this.state.tasks}
      </div>
    )
  }
}


export default Checkboxes;