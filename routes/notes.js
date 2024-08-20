const notes = require('express').Router();
const fs = require('fs');
const db = require('../db/db');

notes.get('/notes', (req, res) => {
    if(!db){
        res.status(500).json('db not found');
    };
    res.status(200).json(db);
})

notes.post('/notes', (req, res) => {
    //code here
    if(!req.body){
        res.status(400).json('Form is empty');
    }

    const {title, text} = req.body;
    
    db.push({ title, 
        text });
    console.log(db)
    fs.writeFile('db/db.json', JSON.stringify(db), (err)=>{
        if(err){res.status(500).json(err)};
    });

    res.status(201).json('Note Created');
    
})

notes.delete('/notes/:id', (req, res) => {
    //code here
})

module.exports = notes;