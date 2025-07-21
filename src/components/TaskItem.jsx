const TaskItem = ({
  task,
  isEditing,
  editedText,
  onEditStart,
  onEditChange,
  onEditSave,
  onInProgress,
  onCompleted,
  onDelete,
}) => (
  <li className={`task-item ${task.status}`}>
    <div className="task-content">
      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editedText}
          onChange={onEditChange}
          onBlur={onEditSave}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onEditSave();
          }}
          autoFocus
        />
      ) : (
        <>
          <span className="task-title">{task.title}</span>
          <strong className="task-status">{task.status}</strong>
        </>
      )}
    </div>

    <div className="task-actions">
      {task.status === 'in-progress' && (
        <button className="task-action-btn" onClick={onCompleted}>✔</button>
      )}
      <button className="task-action-btn" onClick={onInProgress}>▶</button>
      <button className="task-action-btn delete-icon" onClick={onDelete}>✖</button>
      <button className="task-action-btn" onClick={onEditStart}>✎</button>
    </div>
  </li>
);

export default TaskItem;
