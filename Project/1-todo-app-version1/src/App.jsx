import AppName from "./component/AppName";
import InputRow from "./component/InputRow";
import TodoItems from "./component/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./component/Welcome";
function App() {
  const initialtodoItems = [
    {
      name: "Buy Mikl",
      date: "4/10/2023",
    },
    {
      name: "go to College",
      date: "4/10/2023",
    },
    {
      name: "go to school",
      date: "4/10/2023",
    },
  ];


  const [todoItems, setTodoItems] = useState(initialtodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue)=>{
      const newTodoItems = [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });
  };

  const handleDeleteItem = (todoItemname)=>{
    const newTodoItems = todoItems.filter(item=>item.name!==todoItemname);
    setTodoItems(newTodoItems);
  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <InputRow onNewItem={handleNewItem}></InputRow>
      {todoItems.length === 0 && <Welcome></Welcome>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
