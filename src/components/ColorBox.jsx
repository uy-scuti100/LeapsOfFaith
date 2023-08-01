// ColorBox.js
const ColorBox = ({ colorValue, onClick, isSelected }) => {
  const boxStyle = {
    backgroundColor: colorValue,
    width: "50px",
    height: "50px",
    border: `2px solid ${isSelected ? "black" : "#ccc"}`, // Apply a black border if selected, else use gray border
    margin: "5px",
  };

  return <div className="cursor-pointer" style={boxStyle} onClick={onClick}></div>;
};

export default ColorBox;
