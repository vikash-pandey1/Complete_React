import "./App.css";
// import React from "react";
import FoodItems from "./component/FoodItems";
import ErrorMsg from "./component/ErrorMsg";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import { useState } from "react";
function App() {
  let [foodItems, setFoodItems] = useState([]);



  const onKeyDown = (Event) => {
    if(Event.key==='Enter'){
      let newFoodItem = Event.target.value;
      Event.target.value = "";
      let newItems = [...foodItems,newFoodItem]
      setFoodItems(newItems)
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
