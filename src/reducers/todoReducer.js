import { v4 as uuidv4 } from 'uuid';

/* slightly modified for my needs from tutorial */

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { taskName: action.taskName, id: uuidv4() }];
        case 'EDIT_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, taskName: action.taskName };
                }
                return todo;
            });

        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.id);
    }
};
