import express from 'express';
import mongoose from 'mongoose';
import cards from './dbCards.js';

//App config
const app = express();
const PORT = process.env.PORT || 8001;
const connection_url = `mongodb+srv://dgen:dgen@cluster0.isacn.mongodb.net/datingDB?retryWrites=true&w=majority`

// Middllwares


// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello Bunty !!"));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    cards.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});


// Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
