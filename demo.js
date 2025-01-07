// demo.js


const { addTask, completeTask, listTasks, deleteTask } = require('./src/taskManager');


try {
 // Adding tasks
 console.log("Adding tasks...");
 const task1 = addTask("Complete assignment", "2025-01-10");
 const task2 = addTask("Buy groceries", "2025-01-08");
 const task3 = addTask("Schedule a meeting", "2025-01-12");
 console.log("Tasks added:", [task1, task2, task3]);


 // Listing all tasks
 console.log("\nListing all tasks:");
 console.log(listTasks());


 // Marking a task as completed
 console.log("\nMarking task 2 as completed...");
 completeTask(task2.id);


 // Listing tasks filtered by completion status
 console.log("\nListing completed tasks:");
 console.log(listTasks(true));


 console.log("\nListing pending tasks:");
 console.log(listTasks(false));


 // Deleting a task
 console.log("\nDeleting task 1...");
 deleteTask(task1.id);


 // Listing all tasks after deletion
 console.log("\nListing all tasks after deletion:");
 console.log(listTasks());
} catch (error) {
 console.error("An error occurred:", error.message);
}