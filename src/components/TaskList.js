import TaskItem from './TaskItem';
import './styles/TaskList.css';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TaskList = () => {
    const { state } = useContext(TodoContext);
    return (
        <>
            {state.map((todoItems) => (
                <div className='todo-item'>
                    <TaskItem key={state.id} todoItems={todoItems} />
                </div>
            ))}
        </>
    );
};

export default TaskList;
