
//Importing dependencies
const express = require('express');
require('dotenv').config(); //lets me use .env variables

//Initializing the app
const app = express();

//Define the port from .env
const PORT = process.env.PORT || 3000;

//Built in middleware to handle JSON
app.use(express.json());

//Root route = simple welcom message
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Blog Post API!',
        availableRoutes: ['/api/posts', '/api/users', '/health']
    })
});

//Checking Health route
app.get('/health', (req, res) => {
    res.json({ status: 'OK', uptime: process.uptime() });
})

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

//404 Handler 
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
})

//Error handler middleware (handles thrown errors)
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:$(PORT)`)
})