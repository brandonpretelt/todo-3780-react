import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const DeleteButton = ({id}) => {
    const { dispatch } = useContext(TodoContext);
    
    return (
        <> 
               <button onClick={()=>dispatch({type: 'DELETE_TODO', id})}>Delete!</button>
        </>
    );


}

export default DeleteButton;

/*         <button onClick={()=>dispatch({type: 'DELETE_TODO', id: todo.id})}>Delete!</button>
 */