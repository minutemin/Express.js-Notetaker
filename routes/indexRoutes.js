// require express and Router
const router = require('express').Router();
//require path
const path = require('path');

// get homepage for index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//get notes html page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// exoprt the router module
module.exports = router;




