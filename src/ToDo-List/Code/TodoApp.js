import React from 'react';
import "./TodoList.css";

const TodoApp = ({todos,deleteHandler})=>{
    return (
        <div>
            {todos.map((todo,index)=>
            <div key={index}>
                <p>{todo}
                    <button onClick={()=>deleteHandler(index)} className="deltebtn">Delete 
                    </button>
                    
                </p>
            </div>)}
        </div>)
      
} 
export default TodoApp;