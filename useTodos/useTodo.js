import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const init = () => JSON.parse( localStorage.getItem('todos')) || [];

export const useTodo = ({initialState}) => {
        
    const [todos, dispatch] = useReducer( todoReducer, initialState, init);

    const handleNewTodo = ( todo ) => dispatch({
        type: 'Add Todo',
        payload: todo
    });

    const handleDeleteTodo = ( id ) => dispatch({
        type: 'Remove Todo',
        payload: id
    });
      
    const handleToggleTodo = ( id ) => dispatch({
        type: 'Toggle Todo',
        payload: id
    });

    const todosCounter = () => todos.length;

    const pendingTodosCount = () => todos.filter(p => !p.done).length;


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) || []);
    }, [todos]);

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCounter,
        pendingTodosCount

    }
}