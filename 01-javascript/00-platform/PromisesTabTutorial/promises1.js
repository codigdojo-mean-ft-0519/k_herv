//simulated really slow DB call.
function getStuffFromDatabase(callback){
    var data;
    var myTimer = setTimeout(function(){
        console.log("should be logging type of callback  " + typeof(callback));
      if (typeof(callback) == 'function'){
          console.log("it is a function");
        //it just got back from the DB!
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        callback(data);
      }
    }, 5000);
    // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
    return data;
  }    
  //simulated request (failing);
  function requestDataFromDatabase(){
      console.log("first statement in function requestDataFromDatabase");
    var data = getStuffFromDatabase(); // this should return my data right??
    console.log("immediately below var data = getStuffFromDatabase()");
    console.log(data); //outputs undefined
  }
  function catchFly(){
    console.log('I just caught a fly!');
  }
  requestDataFromDatabase();
  console.log("first statement in requestDataFromDatabase()");
  // keep running my program!
  console.log('Hello');
  catchFly();
  //etc.