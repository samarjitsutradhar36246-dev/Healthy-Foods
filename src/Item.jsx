import "./list.css";
const Item = ({ items, handlebuybutton }) => {
  return (
    <li className="list-group-item list">
      {items}
      <button
        type="button"
        className="btn btn-info buttons"
        onClick={handlebuybutton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
