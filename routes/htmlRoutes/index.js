const router = require('express').Router();

const path = require('path'); //module that provides utilities for working with file and directory paths

router.get('/', (req, res) => { //if we open root route, open HTML page to display in browser
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
