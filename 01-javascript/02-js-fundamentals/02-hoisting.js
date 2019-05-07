
// // GIVEN
// // console.log(example);
// // var example = "I'm the example!";
// // AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";



Problems:

//#1
//GIVEN As written:
//console.log(hello);                                   
//var hello = 'world';

//AFTER HOISTING BY THE INTERPRETER
//var hello ='world';
//console.log(hello);

//My predicted output:
//world

//so running original:
// console.log(hello);                                   
// var hello = 'world';

//answer came back as undefined
//Why?  I think it is because the interpreter would actually do this...breaking up the var declaration and initialization
//AFTER HOISTING BY THE INTERPRETER
//var hello;
//console.log(hello);
//hello ='world';

//so running that:
var hello;
console.log(hello);
hello ='world';
//same answer, so I think that is right.

//##########################
//#2

//GIVEN
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

//AFTER HOISTING BY THE INTERPRETER
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// test()

//My prediction: needle gets assigned a value, then test is called, then the inside needle gets new value which prints as magnet.  haystack never mattered.

var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

//prediction was correct

//###########################
//
//#3
//GIVEN
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

//AFTER HOISTING BY THE INTERPRETER
//var brenden = 'super cool';
//function print(){
//    brendan = 'only okay';
//    console.log(brendan);
//}
//console.log(brendan);

//so the same
//My predicted output:  brenden is assigned 'super cool'  print is never called, so console.log(brendan) is next and it prints the value of the variable as defined at the top

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

//result is as predicte

//############################
//#4
//GIVEN
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
//AFTER HOISTING BY THE INTERPRETER
//var food = 'chicken';
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
// console.log(food);
// eat();

//prediction:  console.log prints 'chicken', then eat() is called new value given to food then printed as 'half chicken

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//result as predicted

console.log("\n");

//#####################
//#5
//GIVEN
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
//AFTER HOISTING BY THE INTERPRETER
// var mean;
// var food;
// mean = function() {
// 	   food = "chicken";
// 	   console.log(food);
// 	   food = "fish";
// 	   console.log(food);
// }
// mean();
// console.log(food);
// console.log(food);

//predicted output:  mean calls function resulting in printing 'chicken' then 'fish, then at the bottom it tries prnting food two more times but all assignments are out of scope

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

//My prediction was wrong:  output error says mean is not a function, so it must have been called before its assignment

console.log("\n");

//#####################
//#6
//GIVEN
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
//AFTER HOISTING BY THE INTERPRETER
//var genre;
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
//console.log(genre);
// genre = "disco";
// rewind();


//predicted output:  rewind is called and so output "rock"  "r&b"  then genre is assigned outside and printed as "disco"

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

//my prediction was close, but omitted a console.log that would float to almost the bottom, but before the genre definition and so outputs as undefined:
// undefined
// rock
// r&b
// disco

console.log("\n");

//#####################
//#7
//GIVEN
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);

//prediction:  dojo was not declared, but maybe it will print as "san jose"   then learn is called and does print "seattle"  then "burbank"  If "san jose printed before, it will print again

//result:  as predicted including the undeclared "san jose"s

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

console.log("\n");

//#####################
//#8
//GIVEN
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
//AFTER HOISTING BY THE INTERPRETER
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

//prediction:  essentially just moved function up, so...{name: "Chicago", students: 65, hiring: true} and in second case function attempts to change a constant that was an object to a string of "closed for now"  I think that is not allowed

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            //dojo = "closed for now";
        }
        return dojo;
}

//result:  yep, output is:  TypeError: Assignment to constant variable.
//commenting out that attempt to make it a string yielded
//{ name: 'Chicago', students: 65, hiring: true }
//{ name: 'Berkeley', students: 0 }

//as expected





console.log("\n");





//GIVEN



//AFTER HOISTING BY THE INTERPRETER







