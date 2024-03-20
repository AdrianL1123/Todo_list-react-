import React from "react";
import { useState } from "react";

import AddTodoForm from "./components/add_new_form";
import TodoList from "./components/todo_list";

export default function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  return (
    <div
      className="card rounded shadow-sm"
      style={{
        maxWidth: "600px",
        margin: "60px auto",
      }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <TodoList todos={todos} setTodos={setTodos} />
        <AddTodoForm todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
