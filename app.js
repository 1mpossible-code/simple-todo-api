const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// Require routes for task api
const taskRoutes = require('./Routes/api.routes');

const app = express();

// Parse x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// Parse json
app.use(bodyParser.json());
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
app.use('/tasks', taskRoutes);

// Start server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});