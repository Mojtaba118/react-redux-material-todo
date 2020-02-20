export const todoReducer = (state = {
    todos: []
}, action) => {

    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, {id: Date.now(), title: action.payload, done: false}]
            };
        case "TOGGLE_DONE":
            return toggleDone(action.payload, state);
        case "REMOVE_DONE":
            return removeDone(state);
        case "DELETE_TODO":
            return deleteTodo(action.payload, state);
        case "EDIT_TODO":
            return editTodo(action.payload, state);
        default:
            return state;
    }
};


const toggleDone = (id, state) => {
    let todo = state.todos.find(todo => todo.id === id);
    todo = {...todo, done: !todo.done};
    let todos = state.todos.map(t => t.id === todo.id ? todo : t);
    return {
        ...state,
        todos
    }
};

function removeDone(state) {
    const todos=state.todos.filter(todo=>!todo.done)
    return {
        ...state,
        todos
    }
}

const deleteTodo = (id, state) => {
    const todos = state.todos.filter(todo => todo.id !== id);
    return {
        ...state,
        todos
    }
};

const editTodo = (obj, state) => {
    let todo = state.todos.find(todo => todo.id === obj.id);
    todo = {...todo, title:obj.title};
    let todos = state.todos.map(t => t.id === todo.id ? todo : t);
    return {
        ...state,
        todos
    }
};
