import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const TaskSummary = ({ upcomingCount, inProgressCount, completedCount }) => {
  const totalCount = upcomingCount + inProgressCount + completedCount;

  const chartData = [
    { title: 'Upcoming', value: upcomingCount, color: '#3498db' },
    { title: 'In Progress', value: inProgressCount, color: '#f39c12' },
    { title: 'Completed', value: completedCount, color: '#2ecc71' },
  ];

  return (
    <div className="task-summary">
      <div className="task-summary__left">
        <div className="task-summary__chart-wrapper">
          <PieChart
            data={chartData}
            lineWidth={25}
            rounded
            animate
            style={{ height: '120px', width: '120px' }}
          />
          <div className="task-summary__center-label">
            <span>{totalCount}</span>
            <small>Tasks</small>
          </div>
        </div>
      </div>

      <div className="task-summary__right">
        <div className="task-summary__legend-item">
          <span className="task-summary__color-box task-summary__color-box--blue"></span>
          Upcoming: {upcomingCount}
        </div>
        <div className="task-summary__legend-item">
          <span className="task-summary__color-box task-summary__color-box--orange"></span>
          In Progress: {inProgressCount}
        </div>
        <div className="task-summary__legend-item">
          <span className="task-summary__color-box task-summary__color-box--green"></span>
          Completed: {completedCount}
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;
