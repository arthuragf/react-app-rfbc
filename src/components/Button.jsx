const Button = ({buttonText, backgroundColor="#4eff4d", onClick=() => {}}) => {
  const style = {
    font: "Arial, sans-serif",
    fontSize: "1.5em",
    backgroundColor: backgroundColor,
    color: "#000",
    borderRadius: "15px",
    border: "none",
    padding: "15px 32px",
    margin: "5px 5px"
  };

  return (
    <button onClick={onClick} style={style}>
      {buttonText}
    </button>
  );
};

export default Button