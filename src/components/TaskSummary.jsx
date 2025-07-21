import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const TaskSummary = ({ upcoming, inProgress, completed }) => {
  const total = upcoming + inProgress + completed;

  const data = [
    { title: 'Upcoming', value: upcoming, color: '#3498db' },
    { title: 'In Progress', value: inProgress, color: '#f39c12' },
    { title: 'Completed', value: completed, color: '#2ecc71' },
  ];

  return (
    <div className="task-summary-chart">
     <div className="chart-left">
  <div className="chart-wrapper">
    <PieChart
      data={data}
      lineWidth={25}
      rounded
      animate
      style={{ height: '120px', width: '120px' }}
    />
    <div className="chart-center-label">
      <span>{total}</span>
      <small>Tasks</small>
    </div>
  </div>
</div>


     <div className="chart-right">
  <div className="legend-item">
    <span className="color-box blue"></span> Upcoming: {upcoming}
  </div>
  <div className="legend-item">
    <span className="color-box orange"></span> In Progress: {inProgress}
  </div>
  <div className="legend-item">
    <span className="color-box green"></span> Completed: {completed}
  </div>
</div>

    </div>
  );
};

export default TaskSummary;
