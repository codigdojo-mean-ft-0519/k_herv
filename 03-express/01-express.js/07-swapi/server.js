const bodyParser = require('body-parser');
const express = require('express');
const axios = require('axios');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

var session = require('express-session');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (request, response) {
  console.log('text here tests whether route was entered');
  console.log("request is now we said " + request.session.results);
  response.render('index', {people:request.session.results});  //only one object can be passed...this is optional...remove or convert {key: value}
});

app.get('/people', function(request, res){
    console.log("OO says we shyould get this far")
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get("http://swapi.co/api/people")
    .then(dataNick => {
        let results=[];
        // log the dataNick before moving on! 
        console.log("kent says this next is important");
        console.log("kent thinks the number of people in this pass will be:  " + dataNick.data.results.length);
        for(let i=0; i<dataNick.data.results.length; i++){
            //console.log(dataNick.data.results[i].name  + "\n"  );

            console.log(`rexxxxxxulsts is:   ${results}`);
            let tempName = dataNick.data.results[i].name;
        }
        request.session.results=results;
        console.log("is this junk before the errros");
        // rather than rendering, just send back the json dataNick!
        //res.json(dataNick);
    })
    .catch(error => {
        // log the error before moving on!
        console.log(error);
        res.json(error);
    })


    response.redirect("/") //, {key:value}
});

//put a planet route here that will have app.get('/planets', func......)  url is https://swapi.co/api/planets/


app.post('/route', function (request, response) { 
    //action from the form
  response.redirect('/');
});

app.listen(port, () => console.log(`express server listening on port ${port}`));  //port defined above as port = process.env.PORT || 8000;


