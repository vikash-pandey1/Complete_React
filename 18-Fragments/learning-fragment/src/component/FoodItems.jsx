/* eslint-disable react/prop-types */
import { useState } from "react";
import Items from "./Items";
const FoodItems = ({ items }) => {
  let [activeItems,setActiveItems] = useState([]);
  let onBuyButton = (item,Event)=>{
    let newItems = [...activeItems,item];
    setActiveItems(newItems);
  }
  return (
    <ul>
      {items.map((item) => (
        <Items
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          hangleBuyButton={()=>onBuyButton(item,Event)}
        ></Items>
      ))}
    </ul>
  );
};
export default FoodItems;
