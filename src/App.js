import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import StatusBoard from './components/StatusBoard';
import StatisticsPanel from './components/StatisticsPanel';
import Notification from './components/Notification';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
  };

  const filterTasks = (status) => {
    setSelectedStatus(status);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id!=id));
  };

  return (
    <div className="app-container">
      <Header />
      <Sidebar filterTasks={filterTasks} />
      <main>
        <TaskForm addTask={addTask} />
        <StatusBoard tasks={tasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask}/>
        <TaskList tasks={tasks.filter(task => selectedStatus === 'All' || task.status === selectedStatus)} />
        <StatisticsPanel tasks={tasks} />
      </main>
      <Notification />
    </div>
  );
};

export default App;
