import TaskItem from './TaskItem';
import './TaskList.css';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TaskList = () => {
    const { todoItems } = useContext(TodoContext);
    return (
        <>
            {todoItems.map((item, index) => (
                <div className="todo-item">
                    <TaskItem key={index} item={item.taskName}/>
                </div>
            ))}    
        </>
    )
}

export default TaskList;

/**
 * 
 *                     <div className="button-group">
                        <EditButton findId={findId}/>
                        <DeleteButton />
                    </div>
 * 
 */