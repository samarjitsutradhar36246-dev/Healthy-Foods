import Item from "./Item";
const FoodItems = ({ fooditems }) => {
  return (
    <ul className="list-group">
      {fooditems.map((items) => (
        <Item key={items} items={items}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
