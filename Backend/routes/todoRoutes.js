const express = require('express');
const TodoController = require('../controllers/todoController');

const router = express.Router();

router.post('/todos', TodoController.addTask);
router.get('/todos', TodoController.getAllTasks);
router.put('/todos/:id', TodoController.updateTask);
router.delete('/todos/:id', TodoController.deleteTask);


module.exports = router;
