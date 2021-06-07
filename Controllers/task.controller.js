const Task = require('../Models/task')
const mongoose = require('mongoose')

// Get all tasks
const index = async (req, res) => {
    // Find all tasks
    Task.find().then(
        (tasks) => res.json(tasks),
    );
};

// Show specified task with the given :id
const show = async (req, res) => {
    const id = req.params.id;
    // res.send(id)
    const task = await Task.findById(id).exec();
    res.json(task);
}

// Store new task
const store = async (req, res) => {
    const body = req.body.body;
    const completed = req.body.completed || false;
    // New task from Task model
    Task.create({
            _id: mongoose.Types.ObjectId(),
            body,
            completed,
        },
        (err, task) => {
            // If error - send error
            if (err) res.status(500).send('Internal server error');
            // Return created task
            res.json(task);
        }
    );
};

module.exports = {index, show, store};