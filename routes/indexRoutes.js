// require expressand Router
const router = require('express').Router();
//require path
const path = require('path');

// get homeapge for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.htm'))
});

//get notes html page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});



module.exports = router;
