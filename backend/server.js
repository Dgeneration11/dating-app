import express from 'express';
import mongoose from 'mongoose';

//App config
const app = express();
const PORT = process.env.PORT || 8001;


// Middllwares

// DB config

// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello Bunty !!"));


// Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
