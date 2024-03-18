import "./App.css";
// import React from "react";
import FoodItems from "./component/FoodItems";
import ErrorMsg from "./component/ErrorMsg";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
function App() {
  // let foodItems = [];
  let foodItems = ["dal", "roti", "milk", "salad", "green vegitable", "ghee"];
  let textToShow = "Food item entered by used";
  const hangleOnChange = (Event) => {
    console.log(Event.target.value);
    textToShow = Event.target.value;
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        <p>{textToShow}</p>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodInput hangleOnChange={hangleOnChange}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
