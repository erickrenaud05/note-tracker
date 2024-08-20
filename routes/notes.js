const notes = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json');

notes.get('/notes', (req, res) => {
    //code here
    if(!db){
        res.status(500).json('db not found');
    };
    res.status(200).json(db);
})

notes.post('/notes', (req, pos) => {
    //code here
})

notes.delete('/notes/:id', (req, res) => {
    //code here
})

module.exports = notes;