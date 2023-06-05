// require router with express.Router
const router = require('express').Router();
// require path
const path = require('path');
// require fs
const fs = require('fs');
// require with db varible the database db.json
const db = require('../db/db.json');
//require uuid 
const { v4: uuidv4 } = require('uuid');


// write GET code from db to user
router.get('/api/notes', (req, res) => {
    res.json(db);
});
// router.get('/', (req, res) => {
//     readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)))
// });


// write POST code from user to db
router.post('/api/notes', (req, res) => {
    const note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    }
    db.push(note);
    console.log(db);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(db);
})


// write DELETE code to delete note from db
router.delete('/api/notes/:id', (req, res) => {
    console.log("Hello World")
    // const note = {
    //     title: req.body.title,
    //     text: req.body.text,
    //     id: uuidv4(),
    // }
    // db.delete(note);
    // console.log(db);
    // // rewrites file to db.json with the new note 
    // fs.writeFileSync('./db/db.json', JSON.stringify(db));
    // // respond to the user after post request
    // res.json(db);
    

    // const noteId = req.params.id;
    // router.filter(({noteId}) => id !== req.params.id);
    // res.json(db);

    // const noteId = req.params.id;
    // readFromFile('./db/db.json')
    //     .then((db) => JSON.parse(db))
    //     .then((json) => {
    //         const results = json.filter((note) => note.id !== noteID);
    //         writeToFile('./db/db.json', results);
    //         res.json(`Note ${noteId} has been deleted.`);
    //     });
});


//export router module
module.exports = router;