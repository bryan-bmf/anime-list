const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Define a route
app.get('/hello', (req, res) => {
    res.send('Hello from Firebase!');
});

// Define another route with a parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
});

// Export the API routes
exports.api = functions.https.onRequest(app);
