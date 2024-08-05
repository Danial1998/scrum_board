import React from 'react';

const StatisticsPanel = ({ tasks }) => {
  const taskCounts = {
    'To Do': 0,
    'In Progress': 0,
    'Done': 0
  };

  tasks.forEach(task => {
    taskCounts[task.status]++;
  });

  return (
    <div className="statistics-panel">
      <h2>Statistics</h2>
      <p>To Do: {taskCounts['To Do']}</p>
      <p>In Progress: {taskCounts['In Progress']}</p>
      <p>Done: {taskCounts['Done']}</p>
    </div>
  );
};

export default StatisticsPanel;
