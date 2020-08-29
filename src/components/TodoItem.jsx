import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, markComplete, delTodo }) => {
  const getStyle = () => {
    return {
      background: "lightgrey",
      padding: "10px",
      borderBottom: "1px black dotted",
      textDecoration: todo.completed ? "line-through" : "none",
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onChange={() => markComplete(todo.id)} />{" "}
        {todo.title}{" "}
        <button onClick={() => delTodo(todo.id)} style={btnStyle}>
          x
        </button>
      </p>
    </div>
  );
};

const btnStyle = {
  background: "#ff0000",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
