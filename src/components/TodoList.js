import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updatedTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = todos.filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const todosCollection = todos.map((item) => (
    <Todo todos={item} removeTodo={removeTodo} updatedTodo={updatedTodo} key={item.id}/>
  ));

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      {todosCollection}
    </div>
  );
}
