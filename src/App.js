import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import background from "./images/background.jpg";




function App(props) {
    console.log(props.todos)
    return (<>
        <img src={background} className="background"/>
        <div className="container">
            <div className="todos">
                <TodoForm todos={props.todos}/>
                <hr/>
                <Grid container justify="center">
                    <TodoList todos={props.todos}/>
                </Grid>
            </div>
        </div>
    </>);
}

const mapStateToProps=(state)=>{
    return state;
};

export default connect(mapStateToProps,undefined)(App);
