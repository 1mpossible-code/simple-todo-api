const express = require('express');
const taskController = require('../Controllers/task.controller')

const router = express.Router();

// Get all tasks
router.get('/', taskController.index);
// Get task with specified :id
router.get('/:id', taskController.show);
// Store new task with POST request
// Task MUST have 'body' and OPTIONAL 'completed'
router.post('/store', taskController.store);
// Destroy task with specified :id
router.delete('/:id', taskController.destroy);

module.exports = router;