import "./input.css";
const FoodInput = () => {
  const handleonchange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      className="Inputs"
      type="text"
      placeholder="Enter items to be entered"
      onChange={handleonchange}
    />
  );
};
export default FoodInput;
