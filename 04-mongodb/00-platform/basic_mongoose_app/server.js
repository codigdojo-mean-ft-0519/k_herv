
//basic_mongoose_app from platform
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

// const port = process.env.PORT || 8000;
// const { PORT: port = 8000 } = process.env;
const { env: { PORT: port = 8000 } } = process;
//const { Schema } = mongoose;
const app = express();

var session = require('express-session');  //reference for session: 
app.use(session({
    secret: 'somethingsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
   }));
   
//If using static files (i.e. css)...
app.use(express.static(__dirname+ "/static"));
//If using images…

app.use(express.static(__dirname + "/static/images"));
//This allows us to see and interpret ejs files, which allow us to render dynamic data within an html page

//app.set denotes our express settings
app.set('view engine', 'ejs');
//This allow us to access the files within our views folder
app.set('views', path.join(__dirname, 'views'));
//This allows us to pass text as URL encoded data and exposes the resulting object (containing the keys and values) on request.body.
app.use(bodyParser.urlencoded({ extended: true }));

//Display the index
app.get("/", function (request, response) {
    //Code goes here
    response.render('index');
});

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    res.redirect('/');
})



// listening for incoming connection on port
app.listen(port, () => console.log(`express server listening on port ${port}`));



















