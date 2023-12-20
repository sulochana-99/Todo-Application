import React from 'react';
import { useState } from 'react';
import TodoApp from './TodoApp';
import "./TodoList.css";

function TodoList() {
    const[task,setTask] = useState("");
    const [todos,setTodos] = useState([]);
    const changeHandler = (event)=>{
        setTask(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        console.log(task);
        //it will add the previous todos and new todos
        const newTodos = [...todos,task]
        //by this it will add both new and old todos
        setTodos(newTodos);
        setTask("")
    }
    const deleteHandler  =(indexValue)=>{
        const newTodos = todos.filter((todos,index)=> index!== indexValue);
        setTodos(newTodos)

    }
    
  return (
    <div>
        <div className="container">
            <div className="todo-List">
                <form onSubmit={submitHandler}>
                   
                    
                    <input type="text" placeholder="Enter your Task" className="input-task"  value={task} name="task" onChange={changeHandler}/>
                    
                    <button type="submit" className="addbtn" value="Add" name="Add" >Add Task</button>
                </form>
               <TodoApp todos={todos} deleteHandler={deleteHandler}/>
            </div>
        </div>
    </div>
  )
}

export default TodoList;