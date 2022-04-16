import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import './styles/DeleteButton.css';

const DeleteButton = ({ id }) => {
    const { dispatch } = useContext(TodoContext);

    return (
        <>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', id })}>
                Delete Task
            </button>
        </>
    );
};

export default DeleteButton;

/*         <button onClick={()=>dispatch({type: 'DELETE_TODO', id: todo.id})}>Delete!</button>
 */
