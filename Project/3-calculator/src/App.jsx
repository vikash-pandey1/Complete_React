import styles from "./App.module.css";
import Display from "./component/Display";
import Btn_container from "./component/Btn_container";
import { useState } from "react";
function App() {
  const [ calVal, setCalVal ] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText == "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <Display calVal={calVal}></Display>
      <div className={styles.calculator}>
        <Btn_container onButtonClick={onButtonClick}></Btn_container>
      </div>
    </>
  );
}

export default App;
