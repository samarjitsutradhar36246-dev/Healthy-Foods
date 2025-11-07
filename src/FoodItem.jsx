import Item from "./Item";
const FoodItems = ({ fooditems }) => {
  return (
    <ul className="list-group">
      {fooditems.map((items) => (
        <Item
          key={items}
          items={items}
          handlebuybutton={() => console.log(`${items} has been bought`)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
