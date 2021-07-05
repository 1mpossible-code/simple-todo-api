require('dotenv').config()
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const morgan = require('morgan')

// Require routes for task api
const taskRoutes = require('./Routes/api.routes');

const app = express();

// Enable all CORS requests
app.use(cors());

// Parse x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// Parse json
app.use(bodyParser.json());

// Logger
app.use(morgan("tiny"));

// Define db uri
const dbURI = process.env.DB_URI;

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

// Export app module
module.exports = app;