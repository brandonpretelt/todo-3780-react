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

