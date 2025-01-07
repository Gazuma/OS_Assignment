// tests/taskManager.test.js


const { addTask, completeTask, listTasks, deleteTask } = require('../src/taskManager');


describe('Task Manager', () => {
 beforeEach(() => {
   // Reset tasks and ID counter before each test.
   jest.resetModules();
 });


 //adds empty task to array
 test('should add a new task', () => {
   const task = addTask('Test task', '2025-01-10');
   expect(task).toMatchObject({
     id: 1,
     description: 'Test task',
     dueDate: '2025-01-10',
     completed: false,
   });
 });

//tries to add task without description or dueDate
 test('should throw an error if description or dueDate is missing', () => {
   expect(() => addTask()).toThrow('Both description and dueDate are required.');
   expect(() => addTask('Test task')).toThrow('Both description and dueDate are required.');
 });

//tries to mark a task as completed
 test('should mark a task as complete', async () => {
   const task = addTask('Test task', '2025-01-10');
   completeTask(task.id);
   const tasks = listTasks();
   expect(tasks[1].completed).toBe(true);
 });

//tries to mark a non-existent task as complete
 test('should throw an error if marking a non-existent task as complete', () => {
   expect(() => completeTask(999)).toThrow('Task with ID 999 not found.');
 });

//tries to list all tasks
 test('should list all tasks', () => {
   addTask('Task 1', '2025-01-10');
   addTask('Task 2', '2025-01-11');
   const tasks = listTasks();
   expect(tasks.length).toBe(4);
 });

//tries to list tasks by completion status
 test('should filter tasks by completion status', () => {
   addTask('Task 1', '2025-01-10');
   const task2 = addTask('Task 2', '2025-01-11');
   completeTask(task2.id);
   const completedTasks = listTasks(true);
   const pendingTasks = listTasks(false);
   expect(completedTasks.length).toBe(2);
   expect(pendingTasks.length).toBe(4);
 });

// tries to delete a task by ID
 test('should delete a task by ID', () => {
   const task = addTask('Task to delete', '2025-01-10');
   deleteTask(task.id);
   const tasks = listTasks();
   expect(tasks.length).toBe(6);
 });


 test('should throw an error if deleting a non-existent task', () => {
   expect(() => deleteTask(999)).toThrow('Task with ID 999 not found.');
 });
});





