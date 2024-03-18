import Todo_item from "./todo_item";
import Add_new_form from "./add_new_form";
export default function Todo_list() {
  const todos = [
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    { id: 3, text: "Task 3" },
  ];
  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <ul className="list-group">
          {todos.map((todo, index) => {
            const { text, id } = todo;
            return <Todo_item key={id} text={text} />;
          })}
        </ul>
        <Add_new_form />
      </div>
    </div>
  );
}
