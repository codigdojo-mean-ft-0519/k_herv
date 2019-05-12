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
  if (request.session.count==undefined){request.session.count = 0;} //may be needed if using session
  response.render('filename');  //only one object can be passed...this is optional...remove or convert {key: value}
});

app.get('/people', function(req, res){
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(url)
    .then(data => {
        // log the data before moving on! 
        console.log(data);
        // rather than rendering, just send back the json data!
        res.json(data);
    })
    .catch(error => {
        // log the error before moving on!
        console.log(error);
        res.json(error);
    })
});




app.post('/route', function (request, response) { 
    //action from the form
  response.redirect('/');
});

app.listen(port, () => console.log(`express server listening on port ${port}`));  //port defined above as port = process.env.PORT || 8000;


