import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const TaskItem = ({item}) => {
    const { todoItems } = useContext(TodoContext);

    return(
        <>
      
            
             <div>{item}</div>
               
                
               
                <EditButton />
                <DeleteButton todoItems={todoItems}/>
           
        </>
    )
}

export default TaskItem;

/*  {edit ? (<div>'hi' </div>) :  <div>{item}</div>} */