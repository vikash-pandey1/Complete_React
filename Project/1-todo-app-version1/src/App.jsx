import AppName from "./component/AppName";
import InputRow from "./component/InputRow";
import Item1 from "./component/RowItem1";
import Item2 from "./component/RowItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      
      <div className="item-container">
      <InputRow></InputRow>
        <Item1></Item1>
        <Item2></Item2>
      </div>
    </center>
  );
}

export default App;
