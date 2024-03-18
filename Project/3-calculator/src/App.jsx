import styles from "./App.module.css";
import Display from "./component/Display";
import Btn_container from "./component/Btn_container";
function App() {
  return (
    <>
    <Display></Display>
      <div className={styles.calculator}>
        <Btn_container></Btn_container>
      </div>
    </>
  );
}

export default App;
