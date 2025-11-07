import "./input.css";
const FoodInput = ({ onkeydown }) => {
  return (
    <input
      className="Inputs"
      type="text"
      placeholder="Enter items to be entered"
      onKeyDown={onkeydown}
    />
  );
};
export default FoodInput;
