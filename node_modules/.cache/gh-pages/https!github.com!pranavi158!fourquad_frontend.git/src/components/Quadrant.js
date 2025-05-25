import React from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import './Quadrant.css';

const Quadrant = ({ title, quadrantKey, tasks, setTasks }) => {
  const filtered = tasks.filter(task => task.quadrant === quadrantKey);

  return (
    <div className="quadrant">
      <h2>{title}</h2>
      <TaskForm quadrant={quadrantKey} setTasks={setTasks} />
      <ul>
        {filtered.map(task => (
          <TaskItem key={task._id} task={task} setTasks={setTasks} />
        ))}
      </ul>
    </div>
  );
};

export default Quadrant;
