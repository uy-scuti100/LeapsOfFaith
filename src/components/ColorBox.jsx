const ColorBox = ({ colorValue }) => {
  const boxStyle = {
    backgroundColor: colorValue,
    width: "50px",
    height: "50px",
    border: "1px solid #ccc",
    margin: "5px",
  };

  return <div style={boxStyle}></div>;
};

export default ColorBox;
