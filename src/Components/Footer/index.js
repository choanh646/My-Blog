import React from "react";

export default function Footer() {
  const styleFooter = {
    width: "100%",
    height: 24,
    fontSize: 12,
    opacity: 0.5,
    textAlign: "center",
    cursor: "default",
    marginTop:7,
    paddingBottom: 10,
    display: "block",
  };
  return (
    <div id="footer" style={styleFooter}>
      <p style={{ color: "#000" }}>Develop By Tran Van Hung</p>
    </div>
  );
}
