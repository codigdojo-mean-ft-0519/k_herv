
function bracesValid(stringIn) { //returns true if all braces are valid
    console.log("stringIn is " + stringIn)
    var foundLefts = [];
    leftBraces = [ '(', '[', '{'];
    rightBraces = [ ')', ']', '}'];
    bracesCollector = [];




    for (var i = 0; i < stringIn.length; i++) {
        testChar = stringIn[i];
        //console.log("i is  " + i + " and testChar is " + testChar);

        if (rightBraces.includes(testChar)) {  
            indexFoundRight=rightBraces.indexOf(testChar);
            //console.log("we found "+ testChar + " at rightBraces array index of " + indexFoundRight);
            //get the index of the last char in the bracesCollector....find the last char in the bracesCollector and use that value to get the index in leftBraces
            indexLastCollectedCharFromLeftBraces = leftBraces.indexOf(bracesCollector[bracesCollector.length-1]);
            if (indexFoundRight != indexLastCollectedCharFromLeftBraces) {
                //console.log("indeces don't match, so returning false");
                return false;
            }
            else {
                bracesCollector.pop();
            }
        }

        if (leftBraces.includes(testChar)) { 
            bracesCollector.push(testChar);
            //console.log("we found "+ testChar + " at index of " + leftBraces.indexOf(testChar));
        }
        console.log("braces Collector is:  " + bracesCollector);



        //console.info(stringIn[i]);
      }

    return true;

}



var results= bracesValid("this( is a ) [valid] {sring}}");

var results= bracesValid("{{()}}[]"); 
//var results= bracesValid("{(})");


console.log(results);









const array = [1, 2, 3];
const value = 1;
const isInArray = array.includes(value);
//console.log(isInArray); // true

//myObj.hasOwnProperty('myKey');

//var car = {type:"Fiat", model:"500", color:"white"};



// var testLeftChar = '{';
// //if (leftBraces.hasOwnProperty('(')) {
// if (leftBraces.includes(testLeftChar)) {  
//     //console.log("we found "+ testLeftChar);
// }

// var testrightChar = '}';
// //if (rightBraces.hasOwnProperty('(')) {
// if (rightBraces.includes(testrightChar)) {  
//     //console.log("we found "+ testrightChar);
// }





