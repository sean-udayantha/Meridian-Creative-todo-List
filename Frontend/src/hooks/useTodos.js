import { useState, useEffect } from 'react';
import todoService from '../services/todoService';

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await todoService.getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    const newTodo = await todoService.addTodo(title);
    setTodos((prev) => [...prev, newTodo]);
  };

  return { todos, addTodo };
};

export default useTodos;
