import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        background: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </div>
  );
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
export default Header;
