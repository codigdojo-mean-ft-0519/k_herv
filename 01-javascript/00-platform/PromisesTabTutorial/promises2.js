//simulated really slow DB call.
function getStuffFromDatabase(callback){
    console.log("first statement in getStuffFromDatabase");
  var data;
  console.log("this log is just before var myTimer = setTimeout(function(){")
  var myTimer = setTimeout(function(){
      console.log("what type is callback:  " + typeof(callback));
    if (typeof(callback) == 'function'){
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
      console.log("data is:  " + data);
      callback(data);
    }
  }, 5000);
  return data;
}    
// ************CHANGES HERE **************
function requestDataFromDatabase(){
    console.log("first in requestDataFromDatabase");  //added...next log is "first statement in getStuffFromDatabase"
  var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
    console.log(`first after data = getStuffFromDatabase`); //added
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  console.log(data, "Synchronous");
}
//***************** END CHANGES **********************
function catchFly(){  
  console.log('I just caught a fly!----last statement before statement after delay');
}
requestDataFromDatabase(); //starts here
// keep running my program!
console.log('Hello, first in function call requestDataFromDatabase');
catchFly();
//etc.
 