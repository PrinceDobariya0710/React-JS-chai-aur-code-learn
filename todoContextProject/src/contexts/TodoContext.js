import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {

    },
    udpateTodo: (id, todo) => {

    },
    deleteTodo: (id) => {

    },
    toggleComplete: (id) => {

    }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider