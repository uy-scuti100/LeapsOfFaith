const SizeBox = ({ sizeName }) => {
  const boxStyle = {
    width: "50px",
    height: "50px",
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  };

  return <div style={boxStyle}>{sizeName}</div>;
};

export default SizeBox;
