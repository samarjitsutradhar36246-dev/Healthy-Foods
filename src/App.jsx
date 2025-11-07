import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./FoodItem";
import ErrorMessege from "./ErrorMessege";
import Container from "./Container";
import Heading from "./Heading";
import FoodInput from "./FoodInput";
function App() {
  let foodItems = ["Salad", "Paneer", "Dal", "Fruits", "Curd"];
  // // let foodItems = [];

  return (
    <Container>
      <Heading />
      <FoodInput />
      <ErrorMessege fooditems={foodItems} />
      <FoodItems fooditems={foodItems} />
    </Container>
  );
}
export default App;
