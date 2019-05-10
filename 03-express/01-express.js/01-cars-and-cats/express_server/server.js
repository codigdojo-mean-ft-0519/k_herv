// You now have the tools necessary to repeat the Cars and Cats assignment from Node, but with Express!

// Take the time to appreciate what a difference a framework makes.

// For this assignment, you will need a static directory. You will not need routes, ejs, nor a views directory.

// Create four html documents in your static directory. These files will be served with the following urls. Why? Because we're requesting static content, and because of our Express static middleware, our server knows to find static files in the static directory. 

// localhost:8000/cars.html - A simple HTML page that shows some cool pictures of different cars.  These car pictures should be stored in your static directory.  DON'T just link to pictures of cars stored somewhere else! Even better, put them in a directory called 'images' inside of your static directory.

// localhost:8000/cats.html - A simple HTML page with some cool pictures of cats.  Again, make sure these pictures are stored on your server.

// localhost:8000/form.html - A simple form where the user can add new car information. For this page, there is no need to have the form do anything. Simply display the form there.

// Also, add a basic html file in your static directory called index.html. What happens when you navigate to the root route localhost:8000? 










// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it









// app.get('/', function(request, response) {
//     // just for fun, take a look at the request and response objects
//    //console.log("The request object", request);
//    //console.log("The response object", response);
//    // use the response object's .send() method to respond with an h1
//    response.send("<h1>Hello Express and Kent </h1>");
// })
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})



// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it