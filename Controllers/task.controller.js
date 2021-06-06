const Task = require('../Models/task')
const mongoose = require('mongoose')

// Get all tasks
const index = (req, res) => {
    // Find all tasks
    Task.find().then(
        (tasks) => res.json(tasks),
    );
};

// Store new task
const store = (req, res) => {
    const body = req.body.body;
    const completed = req.body.completed || false;
    // New task from Task model
    const task = new Task({
        _id: mongoose.Types.ObjectId(),
        body,
        completed,
    });
    // Save new task
    task.save((err, task) => {
        // If error - send error
        if (err) res.status(500).send('Internal server error');
        res.json(task);
    })
};

module.exports = {index, store};