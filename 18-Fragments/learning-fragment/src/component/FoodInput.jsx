import styles from "./FoodInput.module.css";
const FoodInput = ({ hangleOnChange }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter food item here"
      onChange={hangleOnChange}
    />
  );
};
export default FoodInput;
