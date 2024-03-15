/* eslint-disable react/prop-types */
// import Items from "./Items";
const ErrorMsg = ({ items }) => {
  //   let foodItems = [];
  return <>{items.length === 0 && <h3>I am still hungry...</h3>}</>;
};
export default ErrorMsg;
