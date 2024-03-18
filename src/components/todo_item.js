export default function TodoItem(props) {
  const { text, isCompleted } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {/* condition rendering */}
        {/*//* ? = if : = else */}
        {isCompleted ? (
          <button className="btn btn-sm btn-success">
            <i class="bi bi-check-square"></i>
          </button>
        ) : (
          <button className="btn btn-sm btn-light">
            <i className="bi bi-square"></i>
          </button>
        )}
        {/*
            condition rendering in PHP
            if ( isCompleted ) {
              echo "<i className="bi bi-check-square"></i>";
            } else {
              echo "<i className="bi bi-square"></i>"
            }
            */}
        <span className="ms-2">{text}</span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
