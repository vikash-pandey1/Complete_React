/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import RowItem from "./RowItem"
    import { TodoItemsContext } from "../store/todo-items-store"
import { useContext } from "react"

const TodoItems = ()=>{
    const {todoItems,deleteItem} = useContext(
    TodoItemsContext);

    return <>
    <div className="item-container">
        {todoItems.map((item)=>(
            <RowItem todoName={item.name}todoDate={item.data} onDeleteClick={deleteItem}></RowItem>
        ))}
      </div>
    </>
}
export default TodoItems