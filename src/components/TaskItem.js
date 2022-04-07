import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import DeleteButton from "./DeleteButton";

const TaskItem = ({todoItems}) => {
    const { state, dispatch } = useContext(TodoContext);

    const [edit, setEdit] = useState(false);
    const [editedTask, setEditedTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'EDIT_TODO', id: todoItems.id, taskName: editedTask});
        setEdit(edit => !edit);
   
    }

    return(
        <>
        {edit ? 
            <form onSubmit={handleSubmit}>
            <input type="text" 
                value={editedTask} 
                onChange={(e) => {
                    
                    setEditedTask(e.target.value);
                }}
                placeholder={todoItems.taskName}/>
            <input type="submit" value='finish edit' />
            </form> : <div onDoubleClick={()=>setEdit(edit=>!edit)}>{todoItems.taskName}</div>}
            
            <DeleteButton id={todoItems.id}/>
        </>
    )
}

export default TaskItem;