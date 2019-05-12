function getStuffFromDatabase(resolve,reject){
    var data = "whee"
    setTimeout(function(){
        console.log('type of callback  ' + typeof(callback)) //OO added...this is thefirst logged after delay
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        console.log("before resolve(data");
        resolve(data);
        console.log("after resolve(data)");
      // }
    }, 1000);
    reject(data); //comment this line in and out!
    return data;
}
function requestDataFromDatabase(){
  console.log('running');
  //creates promise
  var data = new Promise(function(resolve,reject){
    getStuffFromDatabase(resolve,reject); // kind of like a shiny callback
  });
  // if promise is successful (keeps me from putting all the logic in the callback)
  data.then(function(data){ ///-----like done....what to do when promise is fullfilled
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log("logging each name "  + data[i].name);
    }
  });
  data.catch(function(data){  //--for logging error.....
    console.log('failure');
  })
  console.log('end----looks last before delay'); //this is the last statement before the first statement after the timeout
}
requestDataFromDatabase();