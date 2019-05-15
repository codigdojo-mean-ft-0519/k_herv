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

mongoose.connect("mongodb://localhost/dogs_db", { useNewUrlParser: true });  //establishes database. Name follows localhost/
mongoose.connection.on("connected", () => console.log("Connected to Mongo!"));

//Schemas/models/collections go below.  we need at least throw

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

//Routes Below

app.get("/", function (request, response) {
    //Code goes here
    console.log("test");
    response.render('index');
});






app.listen(port, () => console.log(`express server listening on port ${port}`));  //port defined above as port = process.env.PORT || 8000;



