import TodoItem from "./todo_item";

export default function TodoList(props) {
  const { todos, setTodos } = props;
  return (
    <ul className="list-group">
      {todos.map((todo) => {
        const { text, id, isCompleted } = todo;
        return (
          <TodoItem
            key={id}
            id={id}
            text={text}
            isCompleted={isCompleted}
            onCheck={(id) => {
              const newtodos = todos.find((t) => t.id === id);
              newtodos.isCompleted = !newtodos.isCompleted;
              setTodos([...todos]);
              console.log("todos", todos);
            }}
            onDelete={(id) => {
              setTodos(todos.filter((t) => t.id !== id));
            }}
          />
        );
      })}
    </ul>
  );
}
