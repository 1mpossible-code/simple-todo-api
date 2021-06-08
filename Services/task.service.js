const Task = require('../Models/task')
const mongoose = require('mongoose')

class TaskService {
    /**
     * Get all the task and return them
     * @returns {Promise<Array<EnforceDocument<unknown, {}>>>}
     */
    static async getAll() {
        // Find all tasks
        return await Task.find().exec();
    }

    /**
     * Get one task by the given id
     * @param id
     * @returns {Promise<Query<Document<any, any> | null, Document<any, any>, {}>>}
     */
    static async getOne(id) {
        // Find one task by id and return it
        return await Task.findById(id).exec();
    }

    /**
     * Create new task with specified
     * body and completed params
     * @param body
     * @param completed
     * @returns {Promise<void>}
     */
    static async create(body, completed) {
        // Create task and return it
        return await Task.create({
            _id: mongoose.Types.ObjectId(),
            body,
            completed,
        });
    }

    /**
     * Update one task with specified updates
     * @param _id
     * @param updates {Object}
     * @returns {Promise<UpdateWriteOpResult>}
     */
    static async updateOne(_id, updates) {
        // Update task with _id from updates
        return await Task.updateOne({_id}, updates).exec();
    }

    /**
     * Delete one task with the given id
     * @param _id
     * @returns {Promise<{ok?: number, n?: number} & {deletedCount?: number}>}
     */
    static async deleteOne(_id) {
        return await Task.deleteOne({_id}).exec();
    }
}

module.exports = TaskService;