import React from 'react';

const TaskItem = ({
  task,
  isEditing,
  editedText,
  onEditStart,
  onEditChange,
  onEditSave,
  onMarkInProgress,
  onMarkCompleted,
  onDeleteTask,
}) => (
  <li className={`task-item task-item--${task.status}`}>
    <div className="task-item__content">
      {isEditing ? (
        <input
          type="text"
          className="task-item__edit-input"
          value={editedText}
          onChange={onEditChange}
          onBlur={onEditSave}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onEditSave();
          }}
          autoFocus
          aria-label="Edit task title"
        />
      ) : (
        <>
          <span className="task-item__title">{task.title}</span>
          <strong className="task-item__status">{task.status}</strong>
        </>
      )}
    </div>

    <div className="task-item__actions">
      {task.status === 'in-progress' && (
        <button
          className="task-item__button"
          onClick={onMarkCompleted}
          aria-label="Mark as completed"
        >
          ✔
        </button>
      )}
      <button
        className="task-item__button"
        onClick={onMarkInProgress}
        aria-label="Mark as in-progress"
      >
        ▶
      </button>
      <button
        className="task-item__button task-item__button--delete"
        onClick={onDeleteTask}
        aria-label="Delete task"
      >
        ✖
      </button>
      <button
        className="task-item__button"
        onClick={onEditStart}
        aria-label="Edit task"
      >
        ✎
      </button>
    </div>
  </li>
);

export default TaskItem;
