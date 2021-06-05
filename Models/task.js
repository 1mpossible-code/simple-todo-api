const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    body: String,
    completed: Boolean,
});

module.exports = mongoose.model('Task', taskSchema);