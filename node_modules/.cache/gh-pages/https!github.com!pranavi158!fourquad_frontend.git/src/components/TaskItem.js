import React from 'react';
import { api } from '../api';
import { FaTrash } from 'react-icons/fa';

const TaskItem = ({ task, setTasks }) => {
  const toggle = async () => {
    const res = await api.patch(`/tasks/${task._id}/toggle`);
    setTasks(prev => prev.map(t => t._id === task._id ? res.data : t));
  };

  const remove = async () => {
    await api.delete(`/tasks/${task._id}`);
    setTasks(prev => prev.filter(t => t._id !== task._id));
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={toggle}>{task.text}</span>
      <FaTrash onClick={remove} className="delete-icon" />
    </li>
  );
};

export default TaskItem;
