import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import DeleteButton from "./DeleteButton";

// ! will try edit mode eventually....

const TaskItem = ({todoItems}) => {

    return(
        <>
            <div>{todoItems.taskName}</div>
            <DeleteButton todoItems={todoItems} />
        </>
    )
}

export default TaskItem;

/*  {edit ? (<div>'hi' </div>) :  <div>{item}</div>} */
/*   <EditButton todoItems={todoItems}/> */

/* 

    <>
            
            {editMode ? 
            <input onDoubleClick={(e) => {
                enterEdit()
                dispatch({type: 'EDIT_TODO', taskName: e.target.value})
            }} type="text" placeholder={todoItems.taskName}  /> : 
                <div onDoubleClick={()=>enterEdit()}>{todoItems.taskName}</div>}
                <DeleteButton todoItems={todoItems} />
           
        </>

*/

/* 

    const { dispatch } = useContext(TodoContext);
    
    const [editMode, setEditMode] = useState(false);
    const enterEdit = () => {
        setEditMode((editMode) => !editMode);
    };


*/