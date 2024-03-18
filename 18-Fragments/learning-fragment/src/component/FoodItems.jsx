/* eslint-disable react/prop-types */
import Items from "./Items";
const FoodItems =({items})=>{
    return (
        <ul>
        {items.map((item)=>(<Items key={item} foodItem={item}  hangleBuyButton ={()=>{
          console.log(`${item} bought`);
        }}></Items>))}
      </ul>
    );
};
export default FoodItems