import React from "react";
//import TodoList from "./TodoList";

const Todo = () => {
    return (
        <div className="toDo">
            <li className='todo-item'>Hello</li>
            <button className="complete-btn"> 
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-button"> 
                <i className="fas fa-trash"></i>
            </button>

        </div>
    );

    };

    export default Todo;