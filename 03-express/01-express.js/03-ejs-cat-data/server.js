
// In this assignment, we are going to focus on displaying data about our particular cats.

// As before, when we navigate to localhost:8000/cats, we should see pictures of all our cats. This time, when we click the pictures, they will navigate us to a unique route in the server. This route may be hardcoded for now.

// For each of the cat's routes, serve the same template, details.ejs. However, each route should send different data to the template so that the page is customized for each cat. Again, this data may be hardcoded in the server since we do not have a database yet. Include at least one array in the cat's data so that you may practice iterating over an array in the template.






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



// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');





app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   //console.log("The request object", request);
   //console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.render('index');
})

// Have '/cars' show your pictures of cars.


app.get('/cars', function(request, response) {
  // just for fun, take a look at the request and response objects
 //console.log("The request object", request);
 //console.log("The response object", response);
 // use the response object's .send() method to respond with an h1
 response.render('allcars');
})

// Have '/cats' show your pictures of cats.



app.get('/cats', function(request, response) {
  // just for fun, take a look at the request and response objects
 //console.log("The request object", request);
 //console.log("The response object", response);
 // use the response object's .send() method to respond with an h1
 response.render('cats');
})

// Have 'cars/new' show a form to create a new car. The form does not have to do anything yet.



app.get('/cats/trouble', function(request, response) {
  // just for fun, take a look at the request and response objects
 //console.log("The request object", request);
 //console.log("The response object", response);
 // use the response object's .send() method to respond with an h1
 var catName="Two Tone";
 var cats_array = [{name: "Two Tone", food: "mice", sleep: ["Window", "corner"], age: "4"}];
  response.render('details', {cats: cats_array}, catName );
})

app.get('/cats/twotone', function(request, response) {
  // just for fun, take a look at the request and response objects
 console.log("The request object", request);
 console.log("The response object-----------------------------------------------------------------------", response);
 // use the response object's .send() method to respond with an h1
 var catName="Two Tone";
 var cats_array = [{name: "Two Tone", food: "mice", sleep: ["box", "chair"], age: "5"}];
response.render('details', {cats: cats_array}, catName );
 response.render('details');
})





// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})



// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it