/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const Welcome = ()=>{
    const {todoItems} = useContext(
        TodoItemsContext);
    return todoItems.length ===0 && <p>Enjoy your day</p>
}

export default Welcome;