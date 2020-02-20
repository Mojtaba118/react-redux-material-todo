import React from "react";
import Todo from "./Todo";



const TodoList = ({todos}) => {
    return <>
        {todos.length == 0 ?
            <h5 className="mt-3">No Todo Found! Add One</h5> :
            todos.map(todo => <Todo todo={todo}/>)
        }
    </>
};

export default TodoList;