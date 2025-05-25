import React, { useEffect, useState } from 'react';
import { api } from '../api';
import Quadrant from '../components/Quadrant';
import './Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await api.get('/tasks');
      setTasks(res.data);
    };
    load();
  }, []);

  return (
    <div className="dashboard">
      <h1>Four Quadrants To-Do</h1>
      <div className="grid">
        <Quadrant title="Important & Urgent" quadrantKey="Q1" tasks={tasks} setTasks={setTasks} />
        <Quadrant title="Important but Not Urgent" quadrantKey="Q2" tasks={tasks} setTasks={setTasks} />
        <Quadrant title="Not Important but Urgent" quadrantKey="Q3" tasks={tasks} setTasks={setTasks} />
        <Quadrant title="Not Important & Not Urgent" quadrantKey="Q4" tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Dashboard;
