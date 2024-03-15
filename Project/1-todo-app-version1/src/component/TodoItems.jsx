/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import RowItem from "./RowItem"
const TodoItems = ({todoItems})=>{
    return <>
    <div className="item-container">
        {todoItems.map((item)=>(
            <RowItem todoName={item.name}todoDate={item.data}></RowItem>
        ))}
      </div>
    </>
}
export default TodoItems