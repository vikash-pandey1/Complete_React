import AppName from "./component/AppName";
import InputRow from "./component/InputRow";
import TodoItems from "./component/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Mikl",
      date: "4/10/2023",
    },
    {
      name:'go to College',
      date:'4/10/2023'
    },
    {
      name:'go to school',
      date:'4/10/2023'
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <InputRow></InputRow>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
