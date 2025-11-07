import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ fooditems }) => {
  const [activeItems, setActiveItems] = useState([]);
  let onbuybutton = (event, items) => {
    let newitems = activeItems.includes(items)
      ? activeItems.filter((i) => i !== items) // remove if already bought
      : [...activeItems, items]; // add if not bought

    setActiveItems(newitems);
  };
  return (
    <ul className="list-group">
      {fooditems.map((items) => (
        <Item
          key={items}
          items={items}
          bought={activeItems.includes(items)}
          handlebuybutton={(event) => onbuybutton(event, items)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
