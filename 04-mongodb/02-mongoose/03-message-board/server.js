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

// app.use( function(request, response, next){
//     console.log("middle url and body below");
//     console.log(request.url);
//     console.log(request.body);
//     next();
// });



mongoose.connect("mongodb://localhost/message_board_db", { useNewUrlParser: true });  //establishes database. Name follows localhost/
mongoose.connection.on("connected", () => console.log("Connected to Mongo!"));

//Schemas/models/collections go below.  we need at least throw

const MessageSchema = new Schema({ //platform uses new mongoose.Schema, but we have const { Schema } = mongoose;
    name:{  //This is the name of the message poster
        type: String,
        required: [true, "Please enter your name."],
        minlength: 2,
        maxlength: 45,
        trim: true
    },
    messagecontent:{  //Content of message
        type: String,
        required: [true, "Message content is required"],
        minlength: 2,
       maxlength: 45,
        trim: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: false
    }],
},{timestamps: true}
);


var CommentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 2,
        maxlength: 45,
        trim: true,
    },
    commentcontent: {
        type: String,
        required: [true, "Please enter a quote"],
        minlength:2,
        maxlength: 225,
        trim:true,
    },
    messagecontent_id: {
        type: Schema.Types.ObjectId,
        ref: 'Message',
        required: true
      }

},{timestamps: true}
);

const Message = mongoose.model("Message",MessageSchema);
const Comment = mongoose.model("Comment",CommentSchema);





//Routes Below

app.get("/", function (request, response) {
    //Code goes here
    console.log("test");
    Message.find({})
        .populate("comments")
        .then(messages => {
            //console.log(messages)
            response.render('index', {messages});
        })
    //let messagesDummy = [{name: "Fred", message: "This is a sample message"}, {name: "Mary", message: "A second sample message"}];
        .catch(console.log);
});

// console.log("here")
// Dog.find({ _id: request.params.id })
//     .then(dog => {
//         console.log(dog);
//         response.render("dogs/show", {dog: dog});
//     })
    

//route that creates message
app.post("/createmessage", function(request,response){
    console.log("request.body");
    console.log(request.body);
    Message.create(request.body)
        .then(message => {
            console.log("message below")
            console.log(message.messagecontent);
            response.redirect("/");
        })
        .catch(console.log);
});

//route that creates message
app.post("/createcomment/:id", function(request,response){
    console.log("request.params");
    console.log(request.params);
    Comment.create(request.body)
        .then(comment => {
            return Message.findByIdAndUpdate(comment.messagecontent_id, {$push: {comments: comment }})
                .then(message => {
                    console.log("Message updated with new comment attached!", message);
                    response.redirect("/");
                })
                .catch(error => {
                    console.log(error);
                });
            console.log(comment);
            response.redirect("/");
        })
        .catch(console.log);
});


//route that creates comment on a certain message

//redirects to /


app.listen(port, () => console.log(`express server listening on port ${port}`));  //port defined above as port = process.env.PORT || 8000;



