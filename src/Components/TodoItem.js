import React from 'react';


function TodoItem(props) {
   return (
    <div className="todo-item">
        <table style={{width:"200px"}}>
           <tbody>
               <tr>
                    <td>
                        <input type="checkbox" onChange={
                            () => props.handleChange(props.id)
                        } checked={props.completed ? true : false} />
                    </td>
                    <td>
                    <p>{props.todo_detail}</p>
                    </td>
              </tr>
           </tbody>
        </table>
        
    </div>
   )
}

export default TodoItem;