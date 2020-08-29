import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <input
        style={{ flex: "10", padding: "5px" }}
        type="text"
        name="title"
        placeholder="add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
};

export default AddTodo;
