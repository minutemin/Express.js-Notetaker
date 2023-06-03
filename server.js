// Create an express variable that requires express.  Make sure to install express
const express = require('express');
// create a path variable that requires the path.
const path = require('path');
// create a routes variable that requires the indexRoutes.js page in the routes folder.
const routes = require('./routes/indexRoutes.js');

// create a PORT varible to the port number
const PORT = 3001;
// create an app variable that calls the express function
const app = express();

// Middleware for parsing JSON and urlencoded form data

// Middleware for linking to pageRoutes and notesRoutes

// Middleware static for public folder


// create app to GET the homepage for the routes index html


// create app to POST the homepage in the notes html page


// set app listenter to the port number assigned
