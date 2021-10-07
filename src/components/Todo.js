import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export default function Todo({ todos, removeTodo, updatedTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updatedTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className="todo-row" key={todos.index}>
      <div>{todos.text}</div>
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => removeTodo(todos.id)}
        />
        <TiEdit
          className="edit-icon"
          onClick={() => setEdit({ id: todos.id, value: todos.text })}
        />
      </div>
    </div>
  );
}
