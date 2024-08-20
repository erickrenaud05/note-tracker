const notes = require('express').Router();
const fs = require('fs');
const db = require('../db/db');

notes.get('/notes', (req, res) => {
    if(!db){
        return res.status(500).json('db not found');
    };
    res.status(200).json(db);
})

notes.post('/notes', (req, res) => {
    if(!req.body){
        res.status(400).json('Form is empty');
    }

    const {title, text} = req.body;
    const id = Math.max(...db.map((x) => x.id)) >= 0 ? Math.max(...db.map((x) => x.id))+1 : 1;
    
    db.push({ title, text, id });

    fs.writeFile('db/db.json', JSON.stringify(db), (err)=>{
        if(err){res.status(500).json(err)};
    });

    res.status(201).json('Note Created');
    
})

notes.delete('/notes/:id', (req, res) => {
    if(!req.params.id){
        res.status(500).json('internal server error');
    }

    var deletedNote = null;

    for(let i of db){
        if(i.id === Number(req.params.id)){
            deletedNote = db.splice(i, 1);
        }
    }

    if(!deletedNote){
        return res.status(404).json('note not deleted');
    }

    fs.writeFile('db/db.json', JSON.stringify(db), (err)=>{
        if(err){res.status(500).json(err)};
    }); 
    res.status(200).json('Note deleted successfully!');
    
})

module.exports = notes;