// src/taskManager.js

const tasks = [];
let currentId = 1;

/**
 * Add a new task.
 * @param {string} description - Task description.
 * @param {string} dueDate - Task due date in ISO format.
 * @returns {object} - The newly added task.
 */
function addTask(description, dueDate) {
  if (!description || !dueDate) {
    throw new Error("Both description and dueDate are required.");
  }
  const task = {
    id: currentId++,
    description,
    dueDate,
    completed: false,
  };
  tasks.push(task);
  return task;
}

/**
 * Mark a task as completed.
 * @param {number} id - Task ID.
 */
function completeTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    throw new Error(`Task with ID ${id} not found.`);
  }
  task.completed = true;
}

/**
 * List tasks, optionally filtered by completion status.
 * @param {boolean} [completed] - Filter by completion status.
 * @returns {Array} - List of tasks.
 */
function listTasks(completed) {
  if (completed === undefined) {
    return tasks;
  }
  return tasks.filter((t) => t.completed === completed);
}

/**
 * Delete a task by its ID.
 * @param {number} id - Task ID.
 */
function deleteTask(id) {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    throw new Error(`Task with ID ${id} not found.`);
  }
  tasks.splice(index, 1);
}

module.exports = {
  addTask,
  completeTask,
  listTasks,
  deleteTask,
};
