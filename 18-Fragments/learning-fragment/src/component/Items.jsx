/* eslint-disable react/prop-types */
// import '../App.css';
import styles from './Items.module.css'
const Items = ({foodItem}) => {
  return (
    <li className={`${styles['kg-span']} list-group-item`}>
      <span className="kg-span">{foodItem}</span>
    </li>
  );
};
export default Items;
