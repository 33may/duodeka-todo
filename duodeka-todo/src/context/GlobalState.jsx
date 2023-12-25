import React, { createContext, useState } from 'react';
import Todo from "../entities/todo.jsx";
import PropTypes from "prop-types";

export const GlobalState = createContext({
    todos: [],
    addTodo: () => {},
    checkTodo: () => {},
    deleteTodo: () => {},
    editTodo: () => {}
});

export const GlobalStateProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (name, date) => {
        const newTodo = new Todo(name, date);
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const checkTodo = todoId => {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === todoId ? { ...todo, status: 'complete' } : todo
        ));
    };

    const editTodo = (todoId, newName) => {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === todoId ? { ...todo, status: 'waiting', name: newName } : todo
        ));
    };

    const deleteTodo = todoId => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
    };

    return (
        <GlobalState.Provider value={{ todos, addTodo, checkTodo, deleteTodo, editTodo }}>
            {children}
        </GlobalState.Provider>
    );
};

GlobalStateProvider.propTypes = {
    children: PropTypes.node,
};
