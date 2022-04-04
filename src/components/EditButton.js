/* import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
const EditButton = ({ todoItems }) => {
    const { dispatch } = useContext(TodoContext);

    return (
        <>
            {editMode ? (
                <input
                    onChange={(e) =>
                        dispatch({
                            type: 'EDIT_MODe',
                            todoItems: e.target.value
                        })
                    }
                />
            ) : (
                ''
            )}
            <button
                onClick={() => {
                    enterEdit();
                }}
                style={{ marginRight: 12 + 'px' }}>
                Edit!
            </button>
        </>
    );
};

export default EditButton;
 */
