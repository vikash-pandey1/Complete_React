import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter food item here"
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;
