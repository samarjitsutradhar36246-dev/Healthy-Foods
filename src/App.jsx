import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let foodItems = ["Salad", "Paneer", "Dal", "Fruits", "Curd"];
  // let foodItems = [];
  let emptyMessege = foodItems.length === 0 ? <h3>I'm still hungry</h3> : null;
  return (
    <>
      <h1>Healthy Foods</h1>
      {emptyMessege}
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
