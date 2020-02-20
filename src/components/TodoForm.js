import React, {useState} from "react";
import {Fab, TextField} from "@material-ui/core";
import {connect} from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoForm = (props) => {
    const [text, setText] = useState("");
    let handleSubmit = (e) => {
        e.preventDefault();
        if (text == "") return;
        props.addTodo(text);
        setText("");
    };
    return (
        <form action="" noValidate autoComplete="off" className="add-form" onSubmit={handleSubmit}>
            <TextField label="Todo Title" style={{flexGrow: 1}} value={text} onChange={(e) => setText(e.target.value)}/>
            <Fab size="small" color="primary" style={{marginLeft: "10px"}} type="submit">
                <AddIcon/>
            </Fab>
            <Fab disabled={props.todos.filter(todo=>todo.done).length==0} size="small" color="secondary" style={{marginLeft: "10px"}} type="submit" onClick={props.removeDone}>
                <DeleteIcon/>
            </Fab>
        </form>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (title) => {
            dispatch({
                type: "ADD_TODO",
                payload: title
            });
        },
        removeDone: () => {
            dispatch({
                type: "REMOVE_DONE",
            });
        }
    }
};

export default connect(undefined, mapDispatchToProps)(TodoForm);