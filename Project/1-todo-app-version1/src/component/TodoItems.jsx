/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import RowItem from "./RowItem"
const TodoItems = ({todoItems,onDeleteClick})=>{
    return <>
    <div className="item-container">
        {todoItems.map((item)=>(
            <RowItem todoName={item.name}todoDate={item.data} onDeleteClick={onDeleteClick}></RowItem>
        ))}
      </div>
    </>
}
export default TodoItems