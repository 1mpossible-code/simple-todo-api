const express = require('express');
const taskController = require('../Controllers/task.controller')

const router = express.Router();

router.get('/all', taskController.getAllTasks);
router.get('/create/test', taskController.createTestTask);

module.exports = router;