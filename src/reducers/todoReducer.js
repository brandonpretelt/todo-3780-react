import { v4 as uuidv4 } from 'uuid';

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { taskName: action.todoItems.taskName, id: uuidv4() }
            ];

        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};
