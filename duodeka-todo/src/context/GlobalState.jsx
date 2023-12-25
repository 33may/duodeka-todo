import React, { createContext, useState } from 'react';
import Todo from "../entities/todo.jsx";
import PropTypes from "prop-types";

export const GlobalState = createContext({
    todos: [],
    addTodo: () => {},
    checkTodo: () => {},
    deleteTodo: () => {},
});

export const GlobalStateProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (name, date) => {
        const newTodo = new Todo(name, date)
        setTodos([...todos, newTodo]);
    };

    const checkTodo = (todoId) => {
        setTodos(todos.map(todo =>
            todo.id === todoId ? { ...todo, status: 'complete' } : todo
        ));
    };

    const editTodo = (todoId, name) => {
        setTodos(todos.map(todo =>
            todo.id === todoId ? { ...todo, status: 'waiting', name: name } : todo
        ));
    };

    const deleteTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    };

    return (
        <GlobalState.Provider value={{todos, addTodo, checkTodo, deleteTodo}}>
            {children}
        </GlobalState.Provider>
    );
};

GlobalStateProvider.propTypes = {
    children: PropTypes.node,
};
