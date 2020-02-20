import React, {useState} from "react";
import {Fab, TextField} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';

const EditTodoForm = ({todo,editTodo}) => {
    const [text, setText] = useState(todo.title);
    let handleSubmit = (e) => {
        e.preventDefault();
        if (text == "") return;
        editTodo({id:todo.id,title:text});
    };
    return (
        <form action="" noValidate autoComplete="off" className="add-form" onSubmit={handleSubmit}>
            <TextField label="Todo Title" style={{flexGrow: 1}} value={text} onChange={(e) => setText(e.target.value)}/>
            <Fab size="small" color="primary" style={{marginLeft: "10px"}} type="submit">
                <CheckIcon/>
            </Fab>
        </form>
    )
};

export default EditTodoForm;