import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./FoodItem";
import ErrorMessege from "./ErrorMessege";
import Container from "./Container";
function App() {
  let foodItems = ["Salad", "Paneer", "Dal", "Fruits", "Curd"];
  // // let foodItems = [];

  return (
    <Container>
      <h1>Healthy Foods</h1>
      <ErrorMessege fooditems={foodItems} />
      <FoodItems fooditems={foodItems} />
    </Container>
  );
}
export default App;
