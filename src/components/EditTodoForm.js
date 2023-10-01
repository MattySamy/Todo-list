import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }
  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={value}
        placeholder="update task ♻️..."
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      <button type="submit" className="todo-btn">
        Update Task <FontAwesomeIcon icon={faPenToSquare} />{" "}
      </button>{" "}
    </form>
  );
};

export default EditTodoForm;
