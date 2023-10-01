import React, { useState } from "react";

import TodoForm from "./TodoForm";

import Todo from "./Todo";

import EditTodoForm from "./EditTodoForm";

import { v4 as uuidv4 } from "uuid";

uuidv4();

const TodoWrapper = () => {
  const [todoAll, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todoAll,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  function toggleComplete(id) {
    setTodos(
      todoAll.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todoAll.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    setTodos(
      todoAll.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function editTask(task, id) {
    setTodos(
      todoAll.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, id: id, isEditing: !todo.isEditing }
          : todo
      )
    );
  }
  return (
    <div className="TodoWrapper">
      <h1> Get Things Done {" 💪🏻"} </h1> <TodoForm addTodo={addTodo} />{" "}
      {todoAll.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            key={index}
          />
        )
      )}{" "}
    </div>
  );
};

export default TodoWrapper;
