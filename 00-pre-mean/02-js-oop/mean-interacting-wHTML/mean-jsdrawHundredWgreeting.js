// Adding on to the previous exercise, requirements are:
// Complete the map of the Hundred Acre Wood that we started in the previous module.
// Create objects for each location on the map
// Have the objects point to each other as indicated in the diagram

// I will create the others as the platform did below and test using same techniques as below


// To program this map in JavaScript, we will need to create many objects to represent the different characters' homes and where they are in relation to each other. For each home, we will need to know:

// Who lives there?
//  Which homes are to the north, south, east, and west?
//  Similar to the question we left you with in the Overview module, we will need to determine how to make two objects point to each other. For example, Winnie the Pooh's home is north of Tigger's home while Tigger's home is south of Winnie the Pooh's. Let's try to code that:

var tigger = { character: "Tigger", //start with just the character attribute
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
        }
}; 
tigger.greet();

var pooh = {character:  "Winnie the Pooh",
        greet: function(){
                console.log("hello from " + this.character);
        }

};
tigger.north = pooh; //amazingly, this adds the north attribute by brute force
pooh.south = tigger; //again, adding property or attribute of south to pooh object.

var piglet = { character: "Piglet",
        greet: function(){
        console.log("hello from " + this.character);
        }
};
piglet.east = tigger.north;
tigger.north.west = piglet;


var bees = { character: "Bees",
greet: function(){
        console.log("hello from " + this.character);
        }
};
var gopher = { character: "Gopher",
greet: function(){
        console.log("hello from " + this.character);
        }
};
var rabbit = { character: "Rabbit",
greet: function(){
        console.log("hello from " + this.character);
        }
};
var chris = { character: "Christopher Robin",
greet: function(){
        console.log("hello from " + this.character);
        }
};
var owl = { character: "Owl",
greet: function(){
        console.log("hello from " + this.character);
        }
};
var kanga = { character: "Kanga",
greet: function(){
        console.log("hello from " + this.character);
        }
};
var eeyore = { character: "Eeyore",
greet: function(){
        console.log("hello from " + this.character);
        }
};
var heffalumps = { character: "Heffalumps",
greet: function(){
        console.log("hello from " + this.character);
        }
};



piglet.north=owl;

//console.log("piglet ");
//console.log(piglet);


pooh.north = chris;
pooh.east = bees;

pooh.east.north = rabbit;
pooh.east.west = pooh;

piglet.north.south = piglet;
piglet.north.east =chris;

pooh.north.west=owl;
pooh.north.south=pooh;
pooh.north.east=rabbit;
pooh.north.north=kanga;

rabbit.west=chris;
rabbit.south=bees;
rabbit.east=gopher;

gopher.west = rabbit;

kanga.south = chris;
kanga.north = eeyore;

eeyore.south=kanga;
eeyore.east=heffalumps;

heffalumps.west=eeyore;


//**************this assignment complete */























































