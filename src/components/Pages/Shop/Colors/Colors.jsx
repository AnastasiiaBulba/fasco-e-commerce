const Colors = ({ colors }) => {
  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "13px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: color,
            border: "1px solid #ccc",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Colors;
