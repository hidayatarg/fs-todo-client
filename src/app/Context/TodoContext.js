import { useState, useContext, createContext } from "react";


export const TodoContext = createContext(undefined);

export function useTodoContext() {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw Error('Seems not be in Provider');
    }

    return context;
}

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true);

    return <TodoContext.Provider value={{ todos, setTodos, loading, setLoading }}>
        {children}
    </TodoContext.Provider>
}