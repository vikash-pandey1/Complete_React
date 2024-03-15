import "./App.css";
// import React from "react";
import FoodItems from "./component/FoodItems";
import ErrorMsg from "./component/ErrorMsg";
function App() {
  // let foodItems = [];
  let foodItems = ["dal", "roti", "milk", "salad", "green vegitable", "ghee"];

  return (
    <>
      <h1 className="food-heading">Healthy food</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
