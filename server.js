// Create an express variable that requires express.  Make sure to install express
const express = require('express');
// create an app variable that calls the express function
const app = express();
// create a routes variable that requires the indexRoutes and notes page in the routes folder.
const index = require('./routes/indexRoutes.js');
const api = require('./routes/notesRoutes.js');
// create a PORT varible to the port number
const PORT = process.env.PORT || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware for linking to pageRoutes and notesRoutes
app.use('/', index);
app.use('/api', api);
// Middleware static for public folder
app.use(express.static('public'));

// set app listenter to the port number assigned
app.listen(PORT ,() => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});

