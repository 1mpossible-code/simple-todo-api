const express = require('express');
const mongoose = require('mongoose');

// Require routes for task api
const taskRoutes = require('./Routes/api.routes');

const app = express();
// Define port
const port = 3000;

// Define db uri
const dbURI = 'mongodb://root:example@mongo/simple-todo?authSource=admin';

// Connect to DB
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));

// Define promise
mongoose.Promise = global.Promise;

// Use routes
app.use('/api/tasks', taskRoutes);

// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});