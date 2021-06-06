const express = require('express');
const taskController = require('../Controllers/task.controller')

const router = express.Router();

router.get('/', taskController.index);
router.post('/store', taskController.store);

module.exports = router;