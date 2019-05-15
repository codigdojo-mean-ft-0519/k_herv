
//basic_mongoose_app from platform
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

// const port = process.env.PORT || 8000;
// const { PORT: port = 8000 } = process.env;
const { env: { PORT: port = 8000 } } = process;
const { Schema } = mongoose;
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

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose'); //basic_mongoose is the name of the database we will pick


var QuoteSchema = new Schema({
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

const Quote = mongoose.model("Quote",QuoteSchema); //We are retrieving this Schema from our Models, named 'Quote'

//the Routes

//GET `/` => render welcome page  start here 
app.get("/", function (request, response) {

      response.render('welcome')  //, {quotes: quotes }
    })


//POST `/quotes` => create a quote...comes from the add my quote button on the welcome page...when complete redirect to the page that goes to welcome
app.post('/quotes', function(request, response) {
    Quote.create(request.body)
    .then(quote =>{
        console.log("output", quote);
        response.redirect('/quotes');  //redirects won't do a post target
    })
})
 

//GET `/quotes` => render quotes page  ...shows up from skip to quotes button on the welcome page
app.get("/quotes", function(request,response){
    Quote.find({})
        .then(quotes => response.render("quotes", {quotes: quotes}))
        .catch(console.log);
});


// listening for incoming connection on port
app.listen(port, () => console.log(`express server listening on port ${port}`));



















