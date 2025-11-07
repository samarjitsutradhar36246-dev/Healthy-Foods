import "./list.css";
const Item = ({ items, bought, handlebuybutton }) => {
  return (
    <li className={`list-group-item  list ${bought && "active"}`}>
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
