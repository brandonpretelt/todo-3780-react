import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks: []
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { taskName: action.todoItems.taskName, id: uuidv4() }
            ];
        /*  case 'EDIT_TODO':
            const updatedTodo = action.taskName;
            const updated = state.map((todoItem) => {
                if (todoItem.id === updatedTodo.id) {
                    return updatedTodo;
                }
                return [...state, todoItem];
               
            });
            console.log([...state, updated]);

        // return updatedTodos; */

        /* const updatedTodo = action.payload;
            const updatedTodos = state.map((todoItem) => {
                if (todoItem.id === updatedTodo.id) {
                    return updatedTodo;
                }
                return todoItem;
            });
            return [...state, { todoItems: updatedTodos }]; */

        /*          console.log(action);
            console.log(state);
            return [...state, { taskName: action.taskName, id: uuidv4() }]; */
        /*           return state.map((item) => {
                if (item.id === action.id) {
                    return [...state, { taskName: action.taskName }];
                }
                return item;
            }); */

        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};

/* 
        case 'EDIT_TODO':
            return state.filter((todo) => {
                if (todo.id === action.id) {
                    todo.taskName = action.todoItems.taskName;
                }
            });
*/
