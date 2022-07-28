// const noteRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const {createNewNote} = require("./lib/notes");

const fs= require('fs');

const path = require('path');

const notes = require('./db/db.json');

const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true}));

app.use(express.json());
app.use(express.static('public'));

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.get('/api/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post("/api/notes", (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
    console.log("POSTED");
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});