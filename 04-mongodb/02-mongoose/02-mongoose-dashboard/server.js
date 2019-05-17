const bodyParser = require("body-parser");
const mongoose = require('mongoose'); 
const express = require('express');
const path = require('path');
const { env: { PORT: port = 8000 } } = process;
const { Schema } = mongoose;
const app = express();

app.use(express.static(__dirname+ "/static"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/dogs_db", { useNewUrlParser: true });
mongoose.connection.on("connected", () => console.log("Connected to Mongo!"));

//create dog blueprint
const DogSchema = new Schema({ //platform uses new mongoose.Schema, but we have const { Schema } = mongoose;
    name:{
        type: String,
        required: [true, "Please enter in a name for your dog."]
    },
    breed:{
        type: String,
        required: [true, "Breed is required"],
    },
    age: {
        type: Number,
        required: true,
        min: [0, "Dogs can't be negative ages"],
        max: [23, "Dogs don't live longer than 23 years"],
    }
});

const Dog = mongoose.model("Dog",DogSchema);

//ROUTING STARTS HERE

//Displays all the dogs
app.get("/", function (request, response) {
    Dog.find({})
        .then(dogs => response.render("index", { dogs: dogs }))
        .catch(console.log);
});

//GET '/dogs/new' Displays a form for making a new mongoose.
app.get("/dogs/new", function (request, response) {
    console.log("tester")
    response.render("dogs/new");
});

//Displays info about one dog..per id submitted from links such as that in index.ejs
app.get("/dogs/:id", function (request, response) {
        console.log("here")
    Dog.find({ _id: request.params.id })
        .then(dog => {
            console.log(dog);
            response.render("dogs/show", {dog: dog});
        })
        .catch(console.log);
});




//POST '/dogs' Should be the action attribute for the form in the above route (GET '/dogs/new')...comes from dogs/new.ejs
app.post("/dogs", function(request, response){
    Dog.create(request.body)
        .then(dog => {
            console.log("dogs from make new dog")
            console.log(dog);
            response.redirect("/");
        })
        .catch(console.log);
});


//Should show a form to edit an existing mongoose...from form in index.ejs
app.get("/dogs/edit/:id", function(request,response){
    console.log("edit place");
    Dog.findById( request.params.id )
        .then(dog => {
            console.log(dog);
            response.render("dogs/edit", {dog: dog });
        })
        .catch(console.log);
});

//Should be the action attribute for the form in the above route...updates single dog after dogs/edit.ejs submits form
app.post("/dogs/:id", function(request, response){
    console.log("UPDATING DOGS", request.body, request.params)
    Dog.update({ _id: request.params.id }, {name: request.body.name, breed: request.body.breed, age: request.body.age} )
        .then(dog => {
            console.log(dog);
            response.redirect("/");
        })
        .catch(console.log);
});

//Should delete the dog from the database by ID
app.get("/dogs/destroy/:id", function(request,response){
    Dog.remove({ _id: request.params.id})
        .then(dog => {
            response.redirect("/");
        })
        .catch(console.log);
});

app.listen(port, () => console.log(`express server listening on port ${port}`));
