import React from 'react';

const StatusBoard = ({ tasks, updateTaskStatus, deleteTask }) => {
  const statuses = ['To Do', 'In Progress', 'Done'];

  return (
    <div className="status-board">
      {statuses.map(status => (
        <div key={status} className="status-column">
          <h2>{status}</h2>
          {tasks.filter(task => task.status === status).map(task => (
            <div key={task.id}>
              <h3>{task.title}</h3>
              <button onClick={() => updateTaskStatus(task.id, 'To Do')}>To Do</button>
              <button onClick={() => updateTaskStatus(task.id, 'In Progress')}>In Progress</button>
              <button onClick={() => updateTaskStatus(task.id, 'Done')}>Done</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StatusBoard;
