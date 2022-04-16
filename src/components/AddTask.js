import { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import './styles/AddTask.css';

const AddTask = () => {
    const { dispatch } = useContext(TodoContext);
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName) return;
        dispatch({ type: 'ADD_TODO', taskName, done: false });
        setTaskName('');
    };

    return (
        <form className='add-task' onSubmit={handleSubmit}>
            <input
                type='text'
                value={taskName}
                onChange={(e) => {
                    setTaskName(e.target.value);
                }}
                placeholder='Add item...'
            />
            <input type='submit' value='Add task' />
        </form>
    );
};

export default AddTask;
// onChange={(e) => setTaskName(e.target.value)}
