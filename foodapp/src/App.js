import { useState } from "react";
import Container from "./components/Container";
import styles from "./components/Container.module.css";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let [foodItems, setFoodItem] = useState([]);

  const handleOnKeyDown = (event) => {
    let newFoodItem = event.target.value;
    if (event.key === "Enter" && newFoodItem !== "") {
      event.target.value = "";
      let newFoodItems = [...foodItems, newFoodItem];
      setFoodItem(newFoodItems);
    }
  };
  return (
    <Container styles={styles}>
      <Header />
      <input
        type="text"
        className="form-control"
        placeholder="Enter food items"
        onKeyDown={handleOnKeyDown}
      />
      <ErrorMessage foodItems={foodItems} />
      <FoodList foodItems={foodItems} />
    </Container>
  );
}

export default App;
