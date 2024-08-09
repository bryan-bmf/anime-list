const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// API keys
const giphyKey = process.env.GIPHY_KEY;
const ytKey = process.env.YT_KEY;

// Giphy route
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

// YT Videos route
app.post('/ytVideos', async (req, res) => {
    const q = req.body.q + " anime fights";
    const quantity = req.body.quantity;

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&safeSearch=moderate&maxResults=${quantity}&key=${ytKey}&q=${q}`;
    const resp = await fetch(url);

    if (!resp.ok) {
        throw new Error("Algo explotó");
    }
    const respData = await resp.json();
    res.send(respData)
});

// Export the API routes
exports.api = functions.https.onRequest(app);
