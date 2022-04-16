// import './styles/EditButton.css';

import { useState } from 'react';

const EditButton = ({ editMode, edit: toggle, setEdit: setToggle }) => {
    return (
        <>
            <button className={toggle ? 'hide' : 'show'} onClick={editMode}>
                Edit Task
            </button>
        </>
    );
};

export default EditButton;

/*         <button onClick={()=>dispatch({type: 'DELETE_TODO', id: todo.id})}>Delete!</button>
 */
