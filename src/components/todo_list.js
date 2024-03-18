import Todo_item from "./todo_item";
import Add_new_form from "./add_new_form";
export default function Todo_list() {
  const tasks = [
    { id: 1, taskName: "Task something" },
    { id: 2, taskName: "Task anything" },
    { id: 3, taskName: "Task this" },
  ];
  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <ul className="list-group">
          {tasks.map((task, index) => {
            const { taskName, id } = task;
            return <Todo_item key={id} taskName={taskName} num={index + 1} />;
          })}
        </ul>
        <Add_new_form />
      </div>
    </div>
  );
}
