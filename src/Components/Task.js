import "./checkbox.css";

const Task = () => {
  return (
    <div className="task-item border p-4 mt-3 bg-body-secondary rounded-4 shadow-sm">
      <div className="d-flex align-items-start gap-3">
        <div className="checkbox-wrapper">
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>

        <div className="flex-grow-1">
          <div className="d-flex align-items-center gap-3 mb-2">
            <span className="task-badge bg-primary text-white px-3 py-1 rounded-pill">
              Task #1
            </span>
            <span className="task-status badge bg-warning text-dark">
              Pending
            </span>
          </div>

          <h3 className="task-title mb-2 fw-semibold">Todo Task Title Here</h3>

          <p className="task-description text-muted mb-3">
            This is a detailed description of the task. You can add more details
            about what needs to be done, requirements, or any additional notes.
          </p>

          <div className="d-flex justify-content-between align-items-center">
            <div className="task-meta d-flex gap-3">
              <span className="task-date text-secondary">
                <i className="bi bi-calendar me-1"></i>
                Dec 15, 2024
              </span>
              <span className="task-priority badge bg-info">
                <i className="bi bi-flag me-1"></i>
                Medium
              </span>
            </div>

            <div className="task-actions">
              <button className="btn btn-sm btn-outline-primary me-2">
                <i className="bi bi-pencil"></i>
              </button>
              <button className="btn btn-sm btn-outline-danger">
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="task-progress mt-3">
        <div className="d-flex justify-content-between mb-1">
          <small className="text-secondary">Progress</small>
          <small className="text-primary">75%</small>
        </div>
        <div className="progress" style={{ height: "6px" }}>
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Task;
