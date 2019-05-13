/*
watching the video I learned that next 10 shows the next 10 and only the next 10


*/

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
  console.log(request.session.resultsOfPeople);
  console.log('text here tests whether route was entered');
  console.log("request is now we said " + request.session.resultsOfPeople);
  console.log(request.session.resultsOfPeople)
  // arrayPeopleObj=['{name: Luke Skywalker}','{name: C-3PO}','{name: R2-D2}','{name: Darth Vader}','{name: Leia Organa}','{name: Owen Lars}','{name: Beru Whitesun lars}','{name: R5-D4}','{name: Biggs Darklighter}','{name: Obi-Wan Kenobi}' ];  //only one object can be passed...this is optional...remove or convert {key: value}
  console.log("abdddd=======");
  // console.log(Object.values(arrayPeopleObj));
  // arrayJustArray=[ 'Luke Skywalker','C-3PO','R2-D2','Darth Vader','Leia Organa','Owen Lars','Beru Whitesun lars','R5-D4','Biggs Darklighter','Obi-Wan Kenobi' ];
  console.log(request.session.resultsOfPeople);
  console.log("ssssssss");
  console.log(request.session.resultsOfPeople);
  response.render('index', {people: request.session.resultsOfPeople}) 
});

app.get('/people', function(request, response){
    console.log("OO says we shyould get this far")
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get("https://swapi.co/api/people/?page=3")
    .then(data => {
        let resultsPeople=[];
        let arrayPeople=[];
        // log the dataN before moving on! 
        //console.log("kent says this next is important");
        console.log("kent thinks the number of people in this pass will be:  " + dataN.data.results.length);
        for(let i=0; i<dataN.data.results.length; i++){
            console.log(dataN.data.results[i].name  + "\n"  );
            //console.log(`rexxxxxxulsts is:   ${results}`);
            let tempName = dataN.data.results[i].name;
            console.log("each name should be " + tempName);
            let tempObj = `{name: ${tempName}}`
            resultsPeople.push(tempObj)
            arrayPeople.push(tempName);
        }
        console.log("asdfasdfasdfasfsfffefeefefefe")
        console.log(resultsPeople)
        //request.session.resultsOfPeople=resultsPeople;
        request.session.resultsOfPeople=arrayPeople;
        console.log("kkkkkkkkkkk");
        console.log(request.session.resultsOfPeople);
        console.log("arrayPeople after this");
        console.log(arrayPeople);
        console.log("is this junk before the errros");
        //res.json(dataN);
    })
    .catch(error => {
        // log the error before moving on!
        console.log(error);
        //res.json(error);
    })


    response.redirect("/") //, {key:value}
});

//put a planet route here that will have app.get('/planets', func......)  url is https://swapi.co/api/planets/


app.post('/route', function (request, response) { 
    //action from the form
  response.redirect('/');
});

app.listen(port, () => console.log(`express server listening on port ${port}`));  //port defined above as port = process.env.PORT || 8000;


