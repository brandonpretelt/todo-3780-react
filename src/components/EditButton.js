import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const EditButton = () => {
    return (
        <>
            <button style={{ marginRight: 12 + 'px' }}>Edit! </button>
        </>
    );
};

export default EditButton;

/*     const [edit, setEditMode] = useContext(TodoContext);

    const enterEdit = () => {
        setEditMode(edit => !edit);
        console.log(edit)
    }
 */
