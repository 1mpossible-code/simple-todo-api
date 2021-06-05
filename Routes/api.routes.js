const express = require('express');
const taskController = require('../Controllers/task.controller')

const router = express.Router();

router.get('/', taskController.helloWorld);

module.exports = router;