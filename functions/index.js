const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const https = require('https');
require('dotenv').config();

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

const giphyKey = process.env.GIPHY_KEY;

// Define a route
app.get('/giphy', async (req, res) => {
    const url = "https://api.giphy.com/v1/gifs/random?tag=anime&api_key=" + giphyKey;
    const resp = await fetch(url);

    if (!resp.ok) {
        throw new Error("Algo explotó");
      }

    const respData = await resp.json();
    const gif = respData.data.images.original.url;
    res.send(gif);
});

// Define another route with a parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
});

// Export the API routes
exports.api = functions.https.onRequest(app);
