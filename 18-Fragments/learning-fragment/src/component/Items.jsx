/* eslint-disable react/prop-types */
// import '../App.css';
import styles from "./Items.module.css";
const Items = ({ foodItem, hangleBuyButton }) => {
  return (
    <li className={`${styles["kg-span"]} list-group-item`}>
      <span className="kg-span">{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={hangleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Items;
