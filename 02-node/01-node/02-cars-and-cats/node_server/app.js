

// Assignment: Cars and Cats
// We are going to make another node server in this assignment, but we are going to complicate it. Create a folder called cars_and_cats, this will be your root folder for this project.  Within this folder, create:

// xxA file called app.js.  This is where you will build your node server.
// xxA folder called views.  This is where you will keep your HTML files.
// xxA folder called images for images.
// xxA folder called stylesheets for CSS.
// Your server must be capable of handling the following URL requests:

// Have localhost:7077/cars go to a xxsimple HTML page that shows some cool pictures of different cars.  These car pictures should be stored in your images folder on your server.  DON'T just link to pictures of cars stored somewhere else!!
// Have localhost:7077/cats show a xxsimple HTML page with some cool pictures of cats.  Again, make sure these pictures are stored on your server.
// Have localhost:7077/cars/new show a xxxsimple form where the user can add a new car information. For the /cars/new HTML page, no need to store this information in the database nor is there a need to validate the entries. Simply have the form there.
//  The point of this exercise is to build your node server so it serves all of the content of your website. 

// Helpful hints
// Serving CSS stylesheets
// Here is an example of how to handle a browser request for a stylesheet:

//   else if(request.url === '/stylesheets/style.css'){
//     fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
//      response.writeHead(200, {'Content-type': 'text/css'});
//      response.write(contents);
//      response.end();
//     })
//   }
// Serving images
//   else if(request.url === '/images/pizza.jpg'){
//     // notice we won't include the utf8 encoding
//     fs.readFile('./images/pizza.jpg', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
//   }





// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    //from the platform:  THIS LINE IS CRUCIAL:
    //var server = http.createServer(function (request, response){...}
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    else if(request.url === '/cats') {
        fs.readFile('cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    else if(request.url === '/cars') {
        fs.readFile('allcars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    else if(request.url === '/cars/new') {
        fs.readFile('newcar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    else if(request.url === '/images/car1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

      else if(request.url === '/images/car2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

      else if(request.url === '/images/car3.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }


      else if(request.url === '/images/donkey1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/donkey1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }


      else if(request.url === '/images/donkey2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/donkey2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
        })
    }



    // else if( /images/(jpg|png|gif)$/i.test(request.url) ) {  //accept images here
    //     fs.readFile(request.url.replace('/',''), 'utf8', function (errors, contents){
    //         response.writeHead(200, {'Content-Type': 'image/*'});  // send data about response
    //         response.write(contents);  //  send response body
    //         response.end(); // finished!
    //     });
    // }


// Have localhost:7077/cars go to a simple HTML page that shows some cool pictures of different cars.  These car pictures should be stored in your images folder on your server.  DON'T just link to pictures of cars stored somewhere else!!
// Have localhost:7077/cats show a simple HTML page with some cool pictures of cats.  Again, make sure these pictures are stored on your server.
// Have localhost:7077/cars/new show a simple form where the user can add a new car information. For the /cars/new HTML page, no need to store this information in the database nor is there a need to validate the entries. Simply have the form there.
//  The point of this exercise is to build your node server so it serves all of the content of your website. 

// Serving images
//   else if(request.url === '/images/pizza.jpg'){
//     // notice we won't include the utf8 encoding
//     fs.readFile('./images/pizza.jpg', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
//   }




    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");

//use this to start it up:  nodemon app.js