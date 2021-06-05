const Task = require('../Models/task')
const mongoose = require('mongoose')

// Get all tasks
const getAllTasks = (req, res) => {
    // Find all tasks
    Task.find().then(
        (tasks) => res.status(200).json(tasks)
    );
};

// Create test task
const createTestTask = (req, res) => {
    // New task from Task model
    const task = new Task({_id: mongoose.Types.ObjectId(), body: 'test one', completed: false});
    // Save new task
    task.save((err, task) => {
        if (err) res.status(500).send('Internal server error');
        res.status(200).send(`Created new test task with id: ${task.id}`);
    })
}

module.exports = {getAllTasks, createTestTask};