import React from "react";
import ReactDOM from "react-dom/client";
import AddTodoForm from "./components/add_new_form";
import TodoList from "./components/todo_list";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div
    className="card rounded shadow-sm"
    style={{
      maxWidth: "600px",
      margin: "60px auto",
    }}
  >
    <div className="card-body">
      <h3 className="card-title mb-3">My Todo List</h3>
      <TodoList />
      <AddTodoForm />
    </div>
  </div>
);
