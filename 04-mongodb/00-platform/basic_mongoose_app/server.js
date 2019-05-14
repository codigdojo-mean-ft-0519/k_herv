
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

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

//Display the index

   // User.remove({_id: 'insert record unique id here'}, function(err){
app.get("/", function (request, response) {
    User.find()
        .then(function(users) { 
            console.log("asd");
            console.log(users);
            
            response.render('index', {users: users }) })


        //.then(users => response.render('index', {users: users }))
            //also works as:
            //.then(function(users) { 
             //   console.log("asd");
             //   console.log(users);
                
            //    response.render('index', {users: users }) })
        //response => response.json()
        //is the same as function(response) { return response.json() }
        //(users => response.render('index', {users: users }))
        //is the same as 
        //function(users) { response.render('index', {users: users }) }
      // This is the method that finds all of the users from the database
      // Notice how the first parameter is the options for what to find and the second is the
      //   callback function that has an error (if any) and all of the users
      // Keep in mind that everything you want to do AFTER you get the users from the database must
      //   happen inside of this callback for it to be synchronous 
      // Make sure you handle the case when there is an error, as well as the case when there is no error
      .catch(console.log());
    })

    //dummyArray=[{name: "bob, age: 45"}, {name:"fred", age: 33}];
    //response.render('index',{users:dummyArray});
    //User.findOne({age:5})
//from Jason lecture on this tutorial.....platform way would not be a catch or then....
//User.findOne({}, function(err, user)


app.post('/users', function(request, response) {
    console.log("next line is console log post requst.body")
    console.log("POST DATA", request.body);
    // This is where we would add the user from request.body to the database.
    var user = new User({name: request.body.name, age: request.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
        }
        response.redirect('/');
    })
})


//User.remove({_id: 'insert record unique id here'}, function(err){
app.get("/delete", function (request, response) {
    User.remove({name: "Clark"})
        .then(function(users) { 
            console.log("asd");
            console.log(users);
            
            response.redirect('/' )} )


      .catch(console.log())
    })


// listening for incoming connection on port
app.listen(port, () => console.log(`express server listening on port ${port}`));



















