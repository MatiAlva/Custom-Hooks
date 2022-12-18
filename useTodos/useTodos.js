import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'


export const useTodos = () => {

    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('Todos')) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)


    useEffect(() => {
        localStorage.setItem('Todos', JSON.stringify(todos))
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add Todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    const peadingTodosCount = () => {

    }


    return {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todosCount: todos.length,
        peadingTodosCount: todos.filter(todo => !todo.done).length
    }
}