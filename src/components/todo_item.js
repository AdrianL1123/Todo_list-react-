export default function TodoItem(props) {
  const { text, isCompleted, id, onDelete } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {/* condition rendering */}
        {/*//* ? = if : = else */}
        {isCompleted ? (
          <button className="btn btn-sm btn-success ">
            <i class="bi bi-check-square"></i>
          </button>
        ) : (
          <button className="btn btn-sm btn-light">
            <i className="bi bi-square"></i>
          </button>
        )}
        <span className="ms-2 text-decoration-line-through">{text}</span>
      </div>
      <div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(id);
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
