# To-Do List Manager

## Description
A simple Node.js module for managing a to-do list. It supports adding, updating, viewing, and deleting tasks, with error handling and Jest test coverage. The module is fully documented using JSDoc for better clarity and developer experience.

## Features
- Add tasks with a description and due date.
- Mark tasks as completed.
- List tasks with optional filtering by completion status.
- Delete tasks by their unique ID.
- In-memory task storage.

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Gazuma/OS_Assignment
   cd OS_Assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Add a Task
```javascript
const { addTask } = require('./src/taskManager');
const newTask = addTask('Complete assignment', '2025-01-10');
console.log(newTask);
```

### Mark a Task as Completed
```javascript
const { completeTask } = require('./src/taskManager');
completeTask(1); // Marks task with ID 1 as completed.
```

### List Tasks
```javascript
const { listTasks } = require('./src/taskManager');
console.log(listTasks()); // Lists all tasks.
console.log(listTasks(true)); // Lists completed tasks.
console.log(listTasks(false)); // Lists pending tasks.
```

### Delete a Task
```javascript
const { deleteTask } = require('./src/taskManager');
deleteTask(1); // Deletes task with ID 1.
```

### Demo
A `demo.js` file is included in the project to showcase the usage of the module. It demonstrates adding tasks, marking them as complete, filtering tasks by completion status, and deleting tasks. To run the demo:

```bash
node demo.js
```

### Example Output from `demo.js`
```bash
Adding tasks...
Tasks added: [
  {
    id: 1,
    description: 'Complete assignment',
    dueDate: '2025-01-10',
    completed: false
  },
  {
    id: 2,
    description: 'Buy groceries',
    dueDate: '2025-01-08',
    completed: false
  },
  {
    id: 3,
    description: 'Schedule a meeting',
    dueDate: '2025-01-12',
    completed: false
  }
]

Listing all tasks:
[
  {
    id: 1,
    description: 'Complete assignment',
    dueDate: '2025-01-10',
    completed: false
  },
  {
    id: 2,
    description: 'Buy groceries',
    dueDate: '2025-01-08',
    completed: false
  },
  {
    id: 3,
    description: 'Schedule a meeting',
    dueDate: '2025-01-12',
    completed: false
  }
]

Marking task 2 as completed...

Listing completed tasks:
[
  {
    id: 2,
    description: 'Buy groceries',
    dueDate: '2025-01-08',
    completed: true
  }
]

Listing pending tasks:
[
  {
    id: 1,
    description: 'Complete assignment',
    dueDate: '2025-01-10',
    completed: false
  },
  {
    id: 3,
    description: 'Schedule a meeting',
    dueDate: '2025-01-12',
    completed: false
  }
]

Deleting task 1...

Listing all tasks after deletion:
[
  {
    id: 2,
    description: 'Buy groceries',
    dueDate: '2025-01-08',
    completed: true
  },
  {
    id: 3,
    description: 'Schedule a meeting',
    dueDate: '2025-01-12',
    completed: false
  }
]
```

## Testing
Run the Jest tests to ensure functionality:
```bash
npm test
```

## File Structure
```
project-folder/
│
├── src/
│   ├── taskManager.js     # Main module
│
├── tests/
│   └── taskManager.test.js # Jest test cases
│
├── demo.js                # Demo file for showcasing module usage
├── eslint.config.mjs      # ESLint configuration file for defining linting rules and environment settings.
├── package.json           # Project configuration
└── README.md              # Documentation
```

## GitHub Copilot Usage
GitHub Copilot was used for generating parts of the code, including parts of some functions and test case structures.
