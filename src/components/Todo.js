import React, {useState} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import {connect} from 'react-redux';
import EditTodoForm from "./EditTodoForm";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';


const Todo = ({todo, toggleDone, deleteTodo,editTodo}) => {
    const [edit, setEdit] = useState();
    const handleEditTodo=(obj)=>{
        setEdit(false);
        editTodo(obj)
    };
    return <Grid key={todo.id} item xs={12} className="item-flex mt-3">
        {edit ?
            <EditTodoForm todo={todo} editTodo={handleEditTodo}/>
            :
            <>
                <FormControlLabel
                    control={<Checkbox onChange={() => toggleDone(todo.id)}/>}
                    label={todo.done ? <del>{todo.title}</del> : todo.title}
                    className="todo-title"
                />
                <div className="btn-operation">
                    <Fab size="small" color="primary" style={{marginLeft: "10px"}} type="submit" onClick={()=>setEdit(true)}>
                        <EditIcon/>
                    </Fab>
                    <Fab size="small" color="secondary" style={{marginLeft: "10px"}} type="submit"
                         onClick={() => deleteTodo(todo.id)}>
                        <DeleteIcon/>
                    </Fab>
                </div>
            </>
        }
    </Grid>
};
const mapDispatchToProps = dispatch => {
    return {
        toggleDone: (id) => {
            dispatch({
                type: "TOGGLE_DONE",
                payload: id
            });
        },
        deleteTodo: (id) => {
            dispatch({
                type: "DELETE_TODO",
                payload: id
            });
        },
        editTodo: (obj) => {
            dispatch({
                type: "EDIT_TODO",
                payload: obj
            });
        }
    }
}
export default connect(undefined, mapDispatchToProps)(Todo);