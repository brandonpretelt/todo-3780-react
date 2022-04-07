import { createContext, useEffect, useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer';
import useSetLS from '../hooks/useSetLS';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [state, dispatch] = useReducer(todoReducer, [], () => {
        const localData = localStorage.getItem('tasks');
        return localData ? JSON.parse(localData) : []; 
    
    });
    useSetLS('tasks', state);

  
    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider;