import TaskItem from './TaskItem';
import './TaskList.css';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TaskList = () => {
    const { todoItems } = useContext(TodoContext);
    return (
        <>
            {todoItems.map((todoItems) => (
                <div className='todo-item'>
                    <TaskItem
                        key={todoItems.id}
                        todoItems={todoItems}
                    />
                </div>
            ))}

        </>
    );
};

export default TaskList;