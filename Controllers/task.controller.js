const taskService = require('../Services/task.service')

/**
 * Get all tasks
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const index = async (req, res) => {
    // Render all the tasks
    return res.json(await taskService.getAll())
};

/**
 * Show specified task with the given :id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const show = async (req, res) => {
    // Get id from query string
    const id = req.params.id;
    // Render the task with specified id
    return res.json(await taskService.getOne(id))
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
        return res.status(412).send("Precondition Failed: \'body\' is required")
    }
    const completed = req.body.completed || false;
    // New task from Task model
    return res.json(await taskService.create(body, completed));
};

/**
 * Update task with specified _id
 * with changes from request
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const update = async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    return res.json(await taskService.updateOne(id, updates));
}

/**
 * Destroy task with specified :id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const destroy = async (req, res) => {
    // Get id from request
    const id = req.params.id;
    // Find task with current id
    return res.json(await taskService.deleteOne(id));
}

module.exports = {index, show, store, update, destroy};