import React, { useState } from 'react';
import tasksData from '../data/tasks.json';
import TaskSummary from './TaskSummary';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [newTaskText, setNewTaskText] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  // Add new task
  const handleAddTask = () => {
    if (newTaskText.trim() === '') return;
    const newTask = {
      id: Date.now(),
      title: newTaskText.trim(),
      status: 'pending',
    };
    setTasks([newTask, ...tasks]);
    setNewTaskText('');
  };

  // Status updates
  const markInProgress = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status: 'in-progress' } : task
      )
    );
  };

  const markCompleted = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status: 'completed' } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const startEditing = (id, currentTitle) => {
    setEditingTaskId(id);
    setEditedTaskText(currentTitle);
  };

  const saveEditedTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, title: editedTaskText } : task
      )
    );
    setEditingTaskId(null);
    setEditedTaskText('');
  };

  // Category counts
  const upcomingCount = tasks.filter(
    t => t.status !== 'in-progress' && t.status !== 'completed'
  ).length;
  const inProgressCount = tasks.filter(t => t.status === 'in-progress').length;
  const completedCount = tasks.filter(t => t.status === 'completed').length;

  return (
    <div className="task-list">
      <h2 className="task-list__title">My Tasks</h2>

      <TaskSummary
        upcomingCount={upcomingCount}
        inProgressCount={inProgressCount}
        completedCount={completedCount}
      />

      <TaskInput
        taskText={newTaskText}
        onTextChange={(e) => setNewTaskText(e.target.value)}
        onAddTask={handleAddTask}
      />


      <ul className="task-list__items">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            isEditing={editingTaskId === task.id}
            editedText={editedTaskText}
            onEditStart={() => startEditing(task.id, task.title)}
            onEditChange={(e) => setEditedTaskText(e.target.value)}
            onEditSave={() => saveEditedTask(task.id)}
            onMarkInProgress={() => markInProgress(task.id)}
            onMarkCompleted={() => markCompleted(task.id)}
            onDeleteTask={() => deleteTask(task.id)}
          />

        ))}
      </ul>
    </div>
  );
};

export default TaskList;
