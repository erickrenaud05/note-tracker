const notes = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json');

notes.get('/api/notes', (req, res) => {
    //code here
    res.status(200).json(db)
})

notes.post('/api/notes', (req, pos) => {
    //code here
})

notes.delete('/api/notes/:id', (req, res) => {
    //code here
})

module.exports = notes;