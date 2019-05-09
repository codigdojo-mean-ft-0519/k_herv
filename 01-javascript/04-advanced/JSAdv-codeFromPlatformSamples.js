
//Delegating


function leadBootcamp(language, leader){ //sSteen:  calls another function [huh?] and logs the result [I suppose console.log(outcome)]
    var outcome = leader(language);
    console.log("ran this in leadBootcamp")  //I added this to try....
    console.log(outcome);
}
function Mike(language){ //sSteen: defined Mike - this function will look to see if a given language is in a dictionary of languages, and perform logic accordingly.  [I guess line 54 passes in 'java_android' which is not mentioned in 11-15, so this Mike function returns from line 21?]
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Charlie(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
function Jimmy(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
    'iOS':'successful leader',
    'java_android':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}
leadBootcamp('java_android', Mike); //sSteen:  Mike is the callback. The Mike function is getting passed into the leadBootcamp function [huh...the Mike function...there is no Mike function]
// leadBootcamp('java_android', Charlie); //originally uncommented
// leadBootcamp('java_android', Jimmy);  //originally uncommented

///////////////////////////
console.log("\nSecond Example\n");

// This is a function that just prints the result of another list of instructions
function printResult(doSomething) {
    var result = doSomething();         // store the return value of the callback parameter
    console.log(result);                // print the result!
   }
   printResult(function returnFive(){ return 5 })  // this should print "5"


////////////////////
console.log("\nLast Example This Page\n");

function each(arr, callback) {
    // loop through the array
    for(var i = 0; i < arr.length; i++) {
      callback(arr[i]); // invoking the callback many times... delegation!
    }
  }
  // call the each function
  each([1,2,3], function(num) { console.log(num + " I am from the callback!"); }) //so many alerts!

////////////////
//////////////////
//Promises
console.log("\nPromises\n");

//simulated really slow DB call.
function getStuffFromDatabase(callback){
    var data;
    var myTimer = setTimeout(function(){
      if (typeof(callback) == 'function'){
        //it just got back from the DB!
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        callback(data);
      }
    }, 10000);
    // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
    return data;
  }    
  //simulated request (failing);
  function requestDataFromDatabase(){
    var data = getStuffFromDatabase(); // this should return my data right??
    console.log(data);
  }
  function catchFly(){
    console.log('I just caught a fly!');
  }
  requestDataFromDatabase();
  // keep running my program!
  console.log('Hello');
  catchFly();
  //etc.








