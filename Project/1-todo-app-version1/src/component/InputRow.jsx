import { useState } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

// eslint-disable-next-line react/prop-types
function InputRow() {
  const {addNewItem} = useContext(
    TodoItemsContext);
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (Event) => {
    setTodoName(Event.target.value);
  };
  const handleDateChange = (Event) => {
    setDueDate(Event.target.value);
  };
  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default InputRow;
