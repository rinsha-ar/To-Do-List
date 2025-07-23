import React from 'react';

const TaskInput = ({ taskText, onTextChange, onAddTask }) => (
  <div className="task-input">
    <input
      type="text"
      className="task-input__field"
      value={taskText}
      placeholder="Enter new task"
      onChange={onTextChange}
      autoFocus
      aria-label="Task input"
    />
    <button
      className="task-input__button"
      onClick={onAddTask}
      aria-label="Add task"
    >
      Add
    </button>
  </div>
);

export default TaskInput;
