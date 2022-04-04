import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const DeleteButton = ({ todoItems }) => {
    const { dispatch } = useContext(TodoContext);
    return (<button onClick={()=>dispatch({type: 'DELETE_TODO', id: todoItems.id})}>Delete!</button>)
}

export default DeleteButton;