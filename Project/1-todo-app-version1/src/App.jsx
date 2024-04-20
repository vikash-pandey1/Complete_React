import AppName from "./component/AppName";
import InputRow from "./component/InputRow";
import TodoItems from "./component/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./component/Welcome";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      setTodoItems(newTodoItems);
    });
  };

  const deleteItem = (todoItemname) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemname);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <InputRow></InputRow>
        {<Welcome></Welcome>}
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
