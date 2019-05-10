const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');


const port = process.env.PORT || 8000;
const app = express();

var session = require('express-session');
// original code:
// more new code:
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
  console.log('hello');
  console.log(`in route route before anything ${request.session.count}`);
  console.log(`in route, but just session ${request.session}`);
  if (request.session.count==undefined){
    console.log("in the iff")
    request.session.count = 0;

  }
  else {
          request.session.count += 1;
  console.log(`is it up here? ${request.session.count}`);
  }
  thecount=request.session.count;
  
  response.render('counter', {count: thecount});
});
app.post('/count', function (request, response) {
    
  console.log('posting name')

  request.session.count += 1
    console.log(`the output with a plus 1 is:  ${request.session.count}`);


  response.redirect('/');
});



app.get('/destroy', function (request, response) {
    
  console.log('posting name')

  request.session.count =0
    console.log(`the output with a plus 1 is:  ${request.session.count}`);


  response.redirect('/');
});




app.listen(port, () => console.log(`express server listening on port ${port}`));