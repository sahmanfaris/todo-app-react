import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <p>{todo.title}</p>
    </div>
  );
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
