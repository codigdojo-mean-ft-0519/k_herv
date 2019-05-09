// What is the FS module?
// An essential part of any server is the ability to read and write files.  Reading a file is how we obtain the content to serve to clients, and writing it is how we output content to the client.  If we don't have a way of doing this, we're not going to be able to build a server!   That is why the creators of Node.js built the fs (file system) module.  The FS module allows us to do exactly what we need: read and write content from files, and it is by default included in Node.js. It is very rare that you will see the HTTP module used without the fs module.  The HTTP module is the module that allows us to build a web server that accepts HTTP requests and can serve responses. Combining the fs and http modules, we can create simple web servers quite easily.

// Setting up a basic server:
// Let's make a new folder called node_server and in it make a file called app.js. Here's what goes in app.js:

// // get the http module:
// var http = require('http');
// // fs module allows us to read and write content for responses!!
// var fs = require('fs');
// // creating a server using http module:
// var server = http.createServer(function (request, response){
//     // see what URL the clients are requesting:
//     console.log('client request URL: ', request.url);
//     // this is how we do routing:
//     if(request.url === '/') {
//         fs.readFile('index.html', 'utf8', function (errors, contents){
//             response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
//             response.write(contents);  //  send response body
//             response.end(); // finished!
//         });
//     }
//     // request didn't match anything:
//     else {
//         response.writeHead(404);
//         response.end('File not found!!!');
//     }
// });
// // tell your server which port to run on
// server.listen(6789);
// // print to terminal window
// console.log("Running in localhost at port 6789");
// copy
// Great!  Now let's make a file called index.html and just add some basic content to it.  Boot up your node server by navigating to your node_server folder in a terminal window and typing: