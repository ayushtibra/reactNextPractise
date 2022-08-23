const ProgressBar = ({ completed, bgColor }: any) => {
  const container = {
    height: 20,
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 50,
    marginTop: 50,
  };

  const filled = {
    height: "100%",
    width: `${completed}%`,
    borderRadius: "inherit",
    backgroundColor: `${bgColor}`,
    transition: "width 1s ease-in-out",
    textAlign: "right",
  };

  return (
    <div style={container}>
      <div style={filled}>
        <span className="p-2">{completed}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
