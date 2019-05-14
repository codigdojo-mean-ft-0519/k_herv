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
  console.log('aaaaaaaaaatext here tests whether route was entered');
  //console.log("aaaaaaaarequest is now we said " + request.session.arrayPeople);
  //console.log(request.session.arrayPeople)
  arrayPeopleObj=['{name: Luke Skywalker}','{name: C-3PO}','{name: R2-D2}','{name: Darth Vader}','{name: Leia Organa}','{name: Owen Lars}','{name: Beru Whitesun lars}','{name: R5-D4}','{name: Biggs Darklighter}','{name: Obi-Wan Kenobi}' ];  //only one object can be passed...this is optional...remove or convert {key: value}
  console.log("abdddd");
  //console.log(Object.values(arrayPeopleObj));
  //arrayJustArray=[ 'Luke Skywalker','C-3PO','R2-D2','Darth Vader','Leia Organa','Owen Lars','Beru Whitesun lars','R5-D4','Biggs Darklighter','Obi-Wan Kenobi' ];
  response.render('index', {people: request.session.arrayPeople || []})
});

app.get('/people', function(request, response){
  getPeople(people=>{
    console.log("got people", people, people.length);
    request.session.arrayPeople=people;
    response.json(people);
  })
    // console.log("OO says we shyould get this far")
    // console.log("zzzzzzzzzzzzzzarrayPeople after this");
    // //console.log(request.session.arrayPeople);
    // // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    // axios.get("http://swapi.co/api/people/?page=9")
    // .then(dataNick => {
    //   console.log("two lines, next is dataNick, or results of get")
    //   console.log(dataNick.data.results);
    //     let resultsPeople=[];
    //     let arrayPeople=[];
    //     // log the dataNick before moving on! 
    //     //console.log("kent says this next is important");
    //     //console.log("kent thinks the number of people in this pass will be:  " + dataNick.data.results.length);
    //     for(let i=0; i<dataNick.data.results.length; i++){
    //         //console.log(dataNick.data.results[i].name  + "\n"  );
    //         //console.log(`rexxxxxxulsts is:   ${results}`);
    //         let tempName = dataNick.data.results[i].name;
    //         //console.log("each name should be " + tempName);
    //         let tempObj = `{name: ${tempName}}`
    //         //resultsPeople.push(tempObj)
    //         arrayPeople.push(tempName);
    //     }
    //     // console.log("asdfasdfasdfasfsfffefeefefefe")
    //     // console.log(resultsPeople)
    //     request.session.arrayPeople=arrayPeople;
    //     // console.log("kkkkkkkkkkk");
    //     // console.log(request.session);
    //     // console.log("arrayPeople after this");
    //     // console.log(request.session.arrayPeople);
    //     // console.log("is this junk before the errros");
    //     //res.json(dataNick);
    // })
    // .catch(error => {
    //     // log the error before moving on!
    //     console.log(error);
    //     console.log("getting an error");
    //     //res.json(error);
    // })
    // response.redirect("/") //, {key:value}
});

//put a planet route here that will have app.get('/planets', func......)  url is https://swapi.co/api/planets/


app.post('/route', function (request, response) { 
    //action from the form
  response.redirect('/');
});

app.listen(port, () => console.log(`express server listening on port ${port}`));  //port defined above as port = process.env.PORT || 8000;

// use the presence of content in next to know whether to call the next page
// { count: 87,
//   next: 'https://swapi.co/api/people/?page=3',
//   previous: 'https://swapi.co/api/people/?page=1',
//   results:

function getPeople(done) {
  const results = [];
  function requestPeople(url) {
    axios.get(url)
      .then(dataResponse=>{
        //const next = dataResponse.data.next;
        const { data: { next: nextUrl, results: people }} = dataResponse;
        console.log("got data for url"+ url  + "next url"+ nextUrl)
        results.push(...people.map(person => person.name));

       // for (const person of people) {
       //   results.push(person.name);
       // }

       if (nextUrl) {
        requestPeople(nextUrl);
       } else {
         done(results);
       }
      })


      .catch(error => {
        console.log(error);
        console.log('got an error');
      });

  }
  requestPeople('https://swapi.co/api/people/?page=1');
}

  //dataNick.data.next
  //dataNick.data.results