import React, { useState } from 'react';
import { api } from '../api';

const TaskForm = ({ quadrant, setTasks }) => {
  const [text, setText] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!text.trim()) return;
    const res = await api.post('/tasks', { text, quadrant });
    setTasks(prev => [...prev, res.data]);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="New task..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default TaskForm;
