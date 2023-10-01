import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={value}
        placeholder="What is task today 🤔?"
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      <button type="submit" className="todo-btn">
        Add Note <FontAwesomeIcon icon={faPlus} />{" "}
      </button>{" "}
    </form>
  );
};

export default TodoForm;
