import React from 'react';


function TodoItem(props) {

    const completedStyle = {
        fontStyle:"italic",
        color:"green",
        textDecoration:"line-through"
    }
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
                    <p style={props.completed? completedStyle:null}>{props.todo_detail}</p>
                    </td>
              </tr>
           </tbody>
        </table>
        
    </div>
   )
}

export default TodoItem;