import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', fontSize: '18px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
      {todo.task} - {todo.status}
    </div>
  );
};

export default TodoItem;
