import React from "react";
// import "./styles.css";
function FAQComponent({ text }) {
  const boxStyling = {
    border: "2px solid orange",
    backgroundColor: "#000",
    color: "#fff",
    margin: "2rem",
  };

  return (
    <div style={boxStyling}>
      <p style={{ color: "#fff" }}>{text}</p>
    </div>
  );
}

export default FAQComponent;
