// require express and Router
const router = require('express').Router();
//require path
const path = require('path');

// get homepage for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.htm'))
});

//get notes html page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// exoprt the router module
module.exports = router;
