import styles from "../Btn_cont.module.css";
const btn_container = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.btn_container}>
        {buttonNames.map((buttonName) => (
          <button
            className={styles.btn}
            onClick={() => onButtonClick(buttonName)}
            key={buttonName}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};
export default btn_container;
