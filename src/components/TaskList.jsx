import React, { useState } from 'react';
import tasksData from '../data/tasks.json';
import TaskSummary from './TaskSummary';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState('');

  // Add new task
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const newEntry = {
      id: Date.now(),
      title: newTask.trim(),
      status: 'pending',
    };
    setTasks([newEntry, ...tasks]);
    setNewTask('');
  };

  // Update status
  const handleInProgress = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status: 'in-progress' } : task
      )
    );
  };

  const handleMarkCompleted = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status: 'completed' } : task
      )
    );
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEditStart = (id, currentTitle) => {
    setEditingTaskId(id);
    setEditedText(currentTitle);
  };

  const handleSaveEdit = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, title: editedText } : task
      )
    );
    setEditingTaskId(null);
    setEditedText('');
  };

  const upcomingCount = tasks.filter(
    t => t.status !== 'in-progress' && t.status !== 'completed'
  ).length;
  const inProgressCount = tasks.filter(t => t.status === 'in-progress').length;
  const completedCount = tasks.filter(t => t.status === 'completed').length;

  return (
    <div className="task-list-container">
      <h2 className="task-list-title">My Tasks</h2>

      <TaskSummary
        upcoming={upcomingCount}
        inProgress={inProgressCount}
        completed={completedCount}
      />

      <TaskInput
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onAdd={handleAddTask}
      />

      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            isEditing={editingTaskId === task.id}
            editedText={editedText}
            onEditStart={() => handleEditStart(task.id, task.title)}
            onEditChange={(e) => setEditedText(e.target.value)}
            onEditSave={() => handleSaveEdit(task.id)}
            onInProgress={() => handleInProgress(task.id)}
            onCompleted={() => handleMarkCompleted(task.id)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
  