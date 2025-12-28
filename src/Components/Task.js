import "./checkbox.css";

const Task = ({ userId, id, title, completed, number, Delete, update }) => {
  return (
    <div className="task-item border p-4 mt-3 bg-body-secondary rounded-4 shadow-sm">
      <div className="d-flex align-items-start gap-3">
        <div className="checkbox-wrapper">
          <label className="custom-checkbox">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => update({ id, userId, title, completed })}
            />
            <span className="checkmark"></span>
          </label>
        </div>

        <div className="flex-grow-1">
          <div className="d-flex align-items-center gap-3 mb-2">
            <span className="task-badge bg-primary text-white px-3 py-1 rounded-pill">
              Task #{number}
            </span>
            <span
              className={`task-status badge ${
                completed ? "bg-success" : "bg-warning"
              } text-dark`}
            >
              {completed ? "Completed" : "Pending"}
            </span>
          </div>

          <h3 className="task-title mb-2 fw-semibold">{title}</h3>

          <div className="d-flex justify-content-between align-items-center">
            <div className="task-meta d-flex gap-3">
              <span className="task-priority badge bg-info">User {userId}</span>
            </div>

            <div className="task-actions">
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => Delete(id)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
