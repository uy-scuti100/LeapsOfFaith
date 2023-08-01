// SizeBox.js
const SizeBox = ({ sizeName, onClick, isSelected }) => {
  const boxStyle = {
    width: "50px",
    height: "50px",
    border: `2px solid ${isSelected ? "black" : "#ccc"}`, // Apply a black border if selected, else use gray border
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  };

  return (
    <div className="cursor-pointer" style={boxStyle} onClick={onClick}>
      {sizeName}
    </div>
  );
};

export default SizeBox;
