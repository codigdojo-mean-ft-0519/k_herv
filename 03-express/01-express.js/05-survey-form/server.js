// Have the server render views/index.ejs that has the form for the user to fill out
// The user fills out the form and submits
// The submitted form gets sent to /result
// The server recognizes when someone posts things to /result, grabs information from the POST, and sends the POST data back as it renders views/results.ejs



const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

const session = require('express-session');
// original code:
// more new code:

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (request, response) { //renders the index.ejs aka the survey form 
  console.log('hello');
  //console.log(request)

  response.render('index');
});

//The submitted form gets sent to /result
app.post('/process', function (request, response) {  ///does form processing then sends to the /result route
    //action from the form
    //console.log(request)
    //console.log(request.body.full_name)
    //console.log(request.body)
    //console.log(request.body.dojo_location)
    //console.log(request.body.fav_language)
    //console.log(request.body.subject)

    request.session.fullName=request.body.full_name;
    request.session.dojoLocation=request.body.dojo_location;
    request.session.favLanguage=request.body.fav_language;
    request.session.subject=request.body.subject;
    console.log("request session is:  ");
    console.log(request.session);

    response.redirect('/result');
});


app.get('/result', function (request, response) {  ///renders results, so it populates the output
    console.log("bug me")
    //action from the form
    //most of the work is done here
  response.render('result', request.session);
});

app.listen(port, () => console.log(`express server listening on port ${port}`));



