import React, { useState } from 'react';

const TodoInput = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAddTodo(title);
      setTitle('');
    }
  };

  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Todo"
        style={{ flex: 1, padding: '10px', fontSize: '16px' }}
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
