//Mongoose Dashboard
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

// const port = process.env.PORT || 8000;
// const { PORT: port = 8000 } = process.env;
const { env: { PORT: port = 8000 } } = process;
const { Schema } = mongoose;
const app = express();

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

// This is how we connect to the mongodb database using mongoose -- "dashboard" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/wolve_dashboard'); //dashboard is the name of the database we will pick

var WolfSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 2,
        maxlength: 45,
        trim: true,
    },
    quote: {
        type: String,
        required: [true, "Please enter a quote"],
        minlength:2,
        maxlength: 225,
        trim:true,
    }
},{timestamps: true}
);

const Wolf = mongoose.model("wolf",WolfSchema); //We are retrieving this Schema from our Models, named 'Dashboard'

//Routes start here:



//GET '/' Displays all of the wolves.   renders index.ejs



//GET '/wolves/:id' Displays information about one wolf.  renders show.ejs



//GET '/wolves/new' Displays a form for making a new wolf. renders new.ejs


//POST '/wolves' Should be the action attribute for the form in the above route (GET '/wolves/new').


//GET '/wolves/edit/:id' Should show a form to edit an existing wolf. renders edit.ejs


//POST '/wolves/:id' Should be the action attribute for the form in the above route (GET '/wolves/edit/:id').


//POST '/wolves/destroy/:id' Should delete the wolf from the database by ID.  button on some other rendered page

app.post("/people/:id/delete", function (request, response) {  //delete should not be a get request...browsers will pre-fetch, so may delete something even i the users did not intend to do so
    const id =request.params.id //id points to the /:id/
    User.findByIdAndRemove(id)
        .then(function(user) { 
            console.log("asd");
            console.log(user);
            response.redirect('/' )} 
            
            
        )


        .catch(console.log())
    })















