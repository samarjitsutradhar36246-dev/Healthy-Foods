import "./list.css";
const Item = ({ items }) => {
  const HandleBuyButton = (event) => {
    console.log(`${items} is bought`);
    console.log(event);
  };
  return (
    <li className="list-group-item list">
      {items}
      <button
        type="button"
        className="btn btn-info buttons"
        onClick={(event) => HandleBuyButton(event)}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
