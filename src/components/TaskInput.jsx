const TaskInput = ({ value, onChange, onAdd }) => (
  <div className="task-input">
    <input
      type="text"
      value={value}
      placeholder="Enter new task"
      onChange={onChange}
    />
    <button onClick={onAdd}>Add</button>
  </div>
);

export default TaskInput;
