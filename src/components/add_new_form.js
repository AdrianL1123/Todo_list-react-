import { useState } from "react";

export default function AddTodoForm(props) {
  const { todos, setTodos, onChange } = props;
  const [value, setValue] = useState("");
  return (
    <div className="mt-4">
      <form
        className="d-flex justify-content-between align-items-center"
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([
            ...todos,
            { id: Math.random(), text: value, isCompleted: true },
          ]);
          setValue("");
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Add new item..."
          required
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="btn btn-primary btn-sm rounded ms-2">Add</button>
      </form>
    </div>
  );
}
