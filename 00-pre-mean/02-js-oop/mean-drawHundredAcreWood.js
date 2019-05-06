

// Adding on to the previous exercise, requirements are:
// Complete the map of the Hundred Acre Wood that we started in the previous module.
// Create objects for each location on the map
// Have the objects point to each other as indicated in the diagram

// I will create the others as the platform did below and test using same techniques as below


// To program this map in JavaScript, we will need to create many objects to represent the different characters' homes and where they are in relation to each other. For each home, we will need to know:

// Who lives there?
//  Which homes are to the north, south, east, and west?
//  Similar to the question we left you with in the Overview module, we will need to determine how to make two objects point to each other. For example, Winnie the Pooh's home is north of Tigger's home while Tigger's home is south of Winnie the Pooh's. Let's try to code that:

var tigger = { character: "Tigger"}; //start with just the character attribute
var pooh = {character:  "Winnie the Pooh"};
tigger.north = pooh; //amazingly, this adds the north attribute by brute force
pooh.south = tigger; //again, adding property or attribute of south to pooh object.

//testing to see how the above works
//>>console.log(tigger.character);  //this outputed "Tigger" as expected
//>>console.log(tigger.north);  //this outputed:  { character: 'Winnie the Pooh', south: { character: 'Tigger', north: [Circular] } }
    //so the above, tigger.north seems to have output the same result as doing "pooh", so testing for that
console.log(pooh);  // yes, it returned exactly the same:  { character: 'Winnie the Pooh', south: { character: 'Tigger', north: [Circular] } }
//Trying to get to just one value in such a call:
console.log(tigger.north.character);  //hoping this just returns the character that is north of tigger
//  Yes, it output:  "Winnie the Pooh"  which is the character to the north of Pooh

console.log("dddddddddd");

//Below copying more from the platform

var piglet = { character: "Piglet"};
piglet.east = tigger.north;
tigger.north.west = piglet;

console.log(pooh.west);  //interesting to note that the west attribute was assigned to pooh, without using a direct of pooh
console.log(pooh);  //confirming that pooh really has a west attribute...and it was assigned using tigger.north.west  which seems the same as using pooh.west since tigger.north is the same as pooh
console.log(pooh.west.character);  // and this should yield piglet since it is west of pooh
//and it did

console.log("eeeeeeeeeeeeeeeeee");

//starting to add the others, I will try just setting their directional attributes just using the adjacent ones and leving the off map ones unmentioned
//decided to create all objects with just character attribute, then set direction to avoid undefined

//already done:  pooh, tigger, piglet
//adding bees
var bees = { character: "Bees"};
var gopher = { character: "Gopher"};
var rabbit = { character: "Rabbit"};
var chris = { character: "Christopher Robin"};
var owl = { character: "Owl"};
var kanga = { character: "Kanga"};
var eeyore = { character: "Eeyore"};
var heffalumps = { character: "Heffalumps"};

//now all objects are added
//console.logs will confirm:


console.log(pooh.character);
console.log(tigger.character);
console.log(piglet.character);
console.log(bees.character);
console.log(gopher.character);
console.log(rabbit.character);
console.log(chris.character);
console.log(owl.character);
console.log(kanga.character);
console.log(eeyore.character);
console.log(heffalumps.character);

//confirmed that all objects are created
console.log("ffffffffffffffffffff");

//next step is to:  Have the objects point to each other as indicated in the diagram
//I think this means have north, south, east and west set if appropriate

//starting bottom and working left to right, will confirm that each house/location/object knows its neighbors

console.log("tigger ");
console.log(tigger);

//confirmed tigger knows all adjacent object:  pooh is north

console.log("piglet ");
console.log(piglet);
//only knows east, so adding north is owl
piglet.north=owl;

console.log("piglet ");
console.log(piglet);
//piglit now knows all neighbors

console.log("pooh ");
//console.log(pooh.south.character, pooh.west.character, pooh.north.character, pooh.east.character);
//north and east are undefined, so:
pooh.north = chris;
pooh.east = bees;
console.log(pooh.south.character, pooh.west.character, pooh.north.character, pooh.east.character);
//confirmed

//next is bees which has no neighbors defined.  As I test, I will try defining them from pooh
pooh.east.north = rabbit;
pooh.east.west = pooh;
//bees only has two neighbors
console.log("bees ");
console.log("west: " + bees.west.character + ", north:  " + bees.north.character);
//that worked and was fun, so maybe I Will try it again with owl...using piglet

piglet.north.south = piglet;
piglet.north.east =chris;
console.log("owl ");
console.log("south: " + owl.south.character + ", east:  " + owl.east.character);
//owl neighbors confirmed

//I will complete chris from pooh
pooh.north.west=owl;
pooh.north.south=pooh;
pooh.north.east=rabbit;
pooh.north.north=kanga;

//confirming chris
console.log("chris");
console.log("south:  " + chris.south.character + " west:  " + chris.west.character + " north: " +  chris.north.character + " east: " + chris.east.character);
//chris confirmed

//complete rabbit
rabbit.west=chris;
rabbit.south=bees;
rabbit.east=gopher;
console.log("rabbit");
console.log("south: " + rabbit.south.character + " west:  " + rabbit.west.character + " north: " +  "rabbit.north.character" + " east: " + rabbit.east.character);
//rabbit confirmed

//complete gopher
gopher.west = rabbit;
console.log("gopher");
console.log("west is: " + rabbit.west.character);
//gopher confimed

//complete kanga
kanga.south = chris;
kanga.north = eeyore;
console.log("kanga");
console.log("south is: " + kanga.south.character + " north is: " +  kanga.north.character);
//kanga confirmed

//completing eeyore
eeyore.south=kanga;
eeyore.east=heffalumps;
console.log("eeyore");
console.log("south is: " + eeyore.south.character + " east is: " +  eeyore.east.character);
//kanaga is confirmed

//completeing heffalumps
heffalumps.west=eeyore;
console.log("heffalumps");
console.log("west is: " + heffalumps.west.character);

//**************this assignment complete */























































