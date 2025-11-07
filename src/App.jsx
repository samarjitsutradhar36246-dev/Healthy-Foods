import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./FoodItem";
import ErrorMessege from "./ErrorMessege";
import Container from "./Container";
import Heading from "./Heading";
import FoodInput from "./FoodInput";
import { useState } from "react";
import "./App.css";
function App() {
  const [foodItems, setFoodItems] = useState([]);
  // // let foodItems = [];

  const onkeydown = (event) => {
    if (event.key === "Enter") {
      let newfooditem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newfooditem];
      setFoodItems(newItems);
    }
  };
  return (
    <Container>
      <Heading />
      <FoodInput onkeydown={onkeydown} />
      <ErrorMessege fooditems={foodItems} />

      <FoodItems fooditems={foodItems} />
    </Container>
  );
}
export default App;
