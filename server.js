// Create an express variable that requires express.  Make sure to install express
const express = require('express');
// create a path variable that requires the path.
const path = require('path');
// create a routes variable that requires the indexRoutes.js page in the routes folder.
const api = require('./routes/indexRoutes.js');

// create a PORT varible to the port number
const PORT = 3001;
// create an app variable that calls the express function
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware for linking to pageRoutes and notesRoutes
app.use('/api', api);
// Middleware static for public folder
app.use(express.static('public'));

// set app listenter to the port number assigned
app.listen(PORT ,() => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});
