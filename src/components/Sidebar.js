import React from 'react';

const Sidebar = ({ filterTasks }) => {
  return (
    <aside>
      <button onClick={() => filterTasks('All')}>All</button>
      <button onClick={() => filterTasks('To Do')}>To Do</button>
      <button onClick={() => filterTasks('In Progress')}>In Progress</button>
      <button onClick={() => filterTasks('Done')}>Done</button>
    </aside>
  );
};

export default Sidebar;
