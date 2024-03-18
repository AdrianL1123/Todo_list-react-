import Todo_item from "./todo_item";
import Add_new_form from "./add_new_form";
export default function Todo_list() {
  const todos = [
    { id: 1, text: "Task first" },
    { id: 2, text: "Task second" },
    { id: 3, text: "Task third" },
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
            return <Todo_item key={id} text={text} num={index + 1} />;
          })}
        </ul>
        <Add_new_form />
      </div>
    </div>
  );
}
