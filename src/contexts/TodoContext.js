import { createContext, useEffect, useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer';
import useSetLS from '../hooks/useSetLS';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todoItems, dispatch] = useReducer(todoReducer, [], () => {
        const localData = localStorage.getItem('tasks');
        return localData ? JSON.parse(localData) : []; 
    
    });

    useSetLS('tasks', todoItems);

  
    return (
        <TodoContext.Provider value={{todoItems, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider;