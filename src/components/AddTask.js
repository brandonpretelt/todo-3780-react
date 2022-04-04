import { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const AddTask = () => {
    const { dispatch } = useContext(TodoContext);
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', todoItems: {taskName}})
        setTaskName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)} 
                placeholder='Add item...' />
            <input type='submit' value='Add task' />
        </form>
    );
};

export default AddTask;