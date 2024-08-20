const notes = require('express').Router();
const fs = require('fs');

notes.get('/', (req, res) => {
    //returns notes page
})

notes.get('/api/notes', (req, res) => {
    //code here
})

notes.post('/api/notes', (req, pos) => {
    //code here
})

notes.delete('/api/notes/:id', (req, res) => {
    //code here
})

module.exports = notes;