const TodoModel = require('../models/todoModel');

class TodoController {
  static async addTask(req, res) {
    try {
      const { task ,status="pending" } = req.body;
      if (!task) {
        return res.status(400).json({ error: 'task is required' });
      }
      
      const newTask = await TodoModel.addTask({ task ,status });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add task' });
    }
  }

  static async getAllTasks(req, res) {
    try {
      const tasks = await TodoModel.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  }


  static async updateTask(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;

      if (!updates || Object.keys(updates).length === 0) {
        return res.status(400).json({ error: 'No updates provided' });
      }

      const updatedTask = await TodoModel.updateTask(id, updates);
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: error.message || 'Failed to update task' });
    }
  }

  static async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const result = await TodoModel.deleteTask(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message || 'Failed to delete task' });
    }
  }
}

module.exports = TodoController;
