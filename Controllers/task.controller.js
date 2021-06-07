const Task = require('../Models/task')
const mongoose = require('mongoose')

/**
 * Get all tasks
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const index = async (req, res) => {
    // Find all tasks
    Task.find().then(
        (tasks) => res.json(tasks),
    );
};

/**
 * Show specified task with the given :id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const show = async (req, res) => {
    const _id = req.params.id;
    await Task.findOne({_id}).then((task) => {
        res.json(task);
    });
}

/**
 * Store new task
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const store = async (req, res) => {
    const body = req.body.body;
    if (!body) {
        res.status(412).send("Precondition Failed: \'body\' is required")
    }
    const completed = req.body.completed || false;
    // New task from Task model
    await Task.create({
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

/**
 * Destroy task with specified :id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const destroy = async (req, res) => {
    // Get id from request
    const _id = req.params.id;
    // Find task with current id
    await Task.findOne({_id})
        // Process task
        .then((task) => {
            // Delete task if id is valid, else send 404 error
            if (task) {
                // Delete task
                task.deleteOne();
                // Send success
                res.send('Success');
            } else {
                // Send 404 error
                res.status(404).send("Not Found: task with specified \'id\' is not valid");
            }
        });
}

module.exports = {index, show, store, destroy};