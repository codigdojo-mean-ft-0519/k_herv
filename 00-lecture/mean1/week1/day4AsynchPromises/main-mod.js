// console.log('before');


// function sayHello(name) {
//   setTimeout(function () {
//     console.log(`Hello ${name}`);
//   }, 2000);
// }

// sayHello('Jason');

// console.log('after');


function getThingsFromDb(query, callbackx) {
    console.log("top log");
    console.log(`we requested ${query}`);
    callbackx(['abc',])
    return setTimeout(function () {
        console.log("another log");  //added 1250
        const data = ['thing1', 'thing2', 'thing3'];
      console.log('running timeout', data);
      callbackx(data);
      return data;
     }, 4500);
  }
  
  
  getThingsFromDb('select * from things;', function (things) { 
    console.log('things callback', things);
  });
  
  //pattern: name continuation passing style