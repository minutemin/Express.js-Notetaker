// require router with express.Router
const router = require('express').Router();
// require path
const path = require('path');
// require fs
const fs = require('fs');
// require with db varible the database db.json
let db = require('../db/db.json');
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
    // create a new db variable for an empty array where new db will go
    let newDb = []; 
    console.log(req.params);
    // create noteId for the id parameters
    const noteId = req.params.id;
    // for loop for pushing new db to newDb 
    for (let i = 0; i < db.length; i++) {
        if (noteId !== db[i].id) {
            newDb.push(db[i])
        }
    }
    console.log(newDb);
    // changed db from const to let so it can be changed to newDb to rewrite the new db without the chosen note to be deleted.
    db = newDb;
    // write to sync in db.json and stringify the data
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    // respond with the updated db
    res.json(db);
});
  
//export router module
module.exports = router;




