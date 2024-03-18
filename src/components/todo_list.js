import TodoItem from "./todo_item";

export default function TodoList() {
  const todos = [
    {
      id: 1,
      text: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false,
    },
  ];

  return (
    <ul className="list-group">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            // text={todo.text}
            // isCompleted={todo.isCompleted}
            {...todo}
          />
        );
      })}
    </ul>
  );
}
