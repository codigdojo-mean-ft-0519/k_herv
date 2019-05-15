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
const DogSchema = new Schema({
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
        max: [13, "Dogs can't live longer than 3 years"],
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

app.post("/dogs", function(request, response){
    Dog.create(request.body)
        .then(dog => {
            console.log(dog);
            response.redirect("/");
        })
        .catch(console.log);
});

//Displays info about one dog
app.get("/dogs/new", function (request, response) {
    response.render("dogs/index");
});

//Displays info about one dog
app.get("/dogs/:id", function (request, response) {
    Dog.find({ _id: request.params.id })
        .then(dog => {
            console.log(dog);
            response.render("dogs/show", {dog: dog});
        })
        .catch(console.log);
});

//Should show a form to edit an existing mongoose
app.get("/dogs/edit/:id", function(request,response){
    Dog.find({ _id: request.params.id })
        .then(dog => {
            console.log(dog);
            response.render("dogs/edit", {dog: dog });
        })
        .catch(console.log);
});

//Should be the action attribute for the form in the above route
app.post("/dogs/:id", function(request, response){
    Dog.update({ _id: request.params.id }, {name: request.body.name}, {breed: request.body.breed}, {age: request.body.age})
        .then(dog => {
            console.log(dog);
            response.redirect("/");
        })
        .catch(console.log);
});

//Should delete the mongoose from the database by ID
app.get("/dogs/destroy/:id", function(request,response){
    Dog.remove({ _id: request.params.id})
        .then(dog => {
            response.redirect("/");
        })
        .catch(console.log);
});

app.listen(port, () => console.log(`express server listening on port ${port}`));
