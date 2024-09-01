import "./App.css";
import ButtonList from "./components/ButtonList";
import DisplayOutput from "./components/DisplayOutput";
import styles from "./components/DisplayOutput.module.css";
import buttonStyles from "./components/ButtonList.module.css";
import Container from "./Container";
import { useState } from "react";

function App() {
  const buttons = [
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "/",
    "0",
    ".",
    "=",
    "C",
  ];

  //Object destructuring {}

  //Array destructuring
  let [currVal, setCurrVal] = useState("");

  const handleButtons = (event) => {
    let newCurrVal = event.target.value;

    if (newCurrVal === "=") {
      let result = eval(currVal);
      setCurrVal(result);
    } else if (newCurrVal === "C") {
      setCurrVal("");
    } else {
      let newEnteredVal = currVal + newCurrVal;
      setCurrVal(newEnteredVal);
    }
  };

  return (
    <>
      <Container>
        <DisplayOutput displayVal={currVal} styles={styles} />
        <ButtonList
          buttonStyles={buttonStyles}
          buttons={buttons}
          handleButtons={handleButtons}
        />
      </Container>
      {/* <Container>
        <p>This is a Container</p>
      </Container> */}
    </>
  );
}

export default App;
