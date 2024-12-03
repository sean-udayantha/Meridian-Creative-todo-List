import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const addTodo = async (task) => {
  const response = await axios.post(API_URL, {task});
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTodos,
  addTodo,
};
