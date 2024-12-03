import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import useTodos from '../hooks/useTodos';

const TodoApp = () => {
  const { todos, addTodo } = useTodos();

  return (
    <div style={{ width: '50%', margin: '0 auto', textAlign: 'center' }}>
      <h1>Todo App</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
