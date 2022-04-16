import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import './styles/TaskItem.css';

const TaskItem = ({ todoItems }) => {
    const { dispatch } = useContext(TodoContext);
    const [edit, setEdit] = useState(false);
    const [done, setDone] = useState(false);

    const [editedTask, setEditedTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'EDIT_TODO',
            id: todoItems.id,
            taskName: editedTask,
            done
        });
        setEdit((edit) => !edit);
    };

    const markAsDone = () => {
        setDone((done) => !done);
        dispatch({
            type: 'DONE',
            id: todoItems.id
        });
    };

    const editMode = () => {
        setEdit((edit) => !edit);
    };

    return (
        <div className='edit-container'>
            {edit ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={editedTask}
                        className='input-edit'
                        onChange={(e) => {
                            setEditedTask(e.target.value);
                        }}
                        placeholder={todoItems.taskName}
                    />
                    <input
                        type='submit'
                        className='input-submit'
                        value='Save'
                    />
                </form>
            ) : (
                <div
                    className={todoItems.done ? 'edit-item done' : 'edit-item'}
                    onClick={markAsDone}>
                    {todoItems.taskName}
                </div>
            )}
            <div className='button-group'>
                <EditButton edit={edit} setEdit={setEdit} editMode={editMode} />
                <DeleteButton id={todoItems.id} />
            </div>
        </div>
    );
};

export default TaskItem;
//                     onDoubleClick={() => setEdit((edit) => !edit)}
/* 
         <button
                className={edit ? 'show' : 'hide'}
                type='button'
                onClick={() => setEdit((edit) => !edit)}>
                Edit!
            </button> */
