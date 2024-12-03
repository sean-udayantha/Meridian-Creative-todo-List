const db = require('../services/firebase');

const todoCollection = db.collection('todos');

class TodoModel {
  static async addTask(task) {
    const newDoc = await todoCollection.add(task);
    return { id: newDoc.id, ...task };
  }

  static async getAllTasks() {
    const snapshot = await todoCollection.get();
    const tasks = [];
    snapshot.forEach(doc => tasks.push({ id: doc.id, ...doc.data() }));
    return tasks;
  }

  static async updateTask(id, updates) {
    const taskRef = todoCollection.doc(id);
    const taskSnapshot = await taskRef.get();

    if (!taskSnapshot.exists) {
      throw new Error('Task not found');
    }

    await taskRef.update(updates);
    const updatedTask = await taskRef.get();
    return { id: updatedTask.id, ...updatedTask.data() };
  }

  static async deleteTask(id) {
    const taskRef = todoCollection.doc(id);
    const taskSnapshot = await taskRef.get();

    if (!taskSnapshot.exists) {
      throw new Error('Task not found');
    }

    await taskRef.delete();
    return { message: 'Task deleted successfully', id };
  }


}

module.exports = TodoModel;
