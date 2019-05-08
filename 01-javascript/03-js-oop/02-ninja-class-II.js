// Assignment: Ninja Class II

// Complete the below challenges using Ninja from the previous assignment.

// .punch()
// Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.

// var blueNinja = new Ninja("Goemon");
// var redNinja = new Ninja("Bill Gates");
// redNinja.punch(blueNinja);
//blueNinja is Goemon and he gets punched by Bill Gates who is redNinja
// // -> "Goemon was punched by Bill Gates and lost 5 Health!"


// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and  .punch() will take another Ninja instance.

// blueNinja.kick(redNinja);
// // -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// // In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength
// Validations
// Update .punch() and .kick() so that they only accept Instances of Ninja. Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for particular features.


//-----

function Ninja(name, health=100) {
    // create a private variable that stores a reference to the new object we create
    var self = this;
    var strength =3;
    var speed =3;
    this.nameT = name;
    this.healthT =health;

    this.sayName = function(){
        console.log(`My ninja name is ${this.nameT}`)
    } 
    this.showStats = function() {
        console.log(`Name: ${this.nameT} , Health is ${this.healthT} , Speed: ${speed} , Strength: ${strength}`   );
    }
    
    this.drinkSake = function() {
        this.healthT +=10;
    }

    this.punch =function(otherNinja) {
        otherNinja.healthT -= 5;
        result=`${otherNinja.nameT} was punched by ${this.nameT} and lost 5 Health`;
        console.log(result);
        return this;
    }

    this.kick = function(otherNinja){
        otherNinja.healthT -=strength *15
        result=`${otherNinja.nameT} was kicked by ${this.nameT} and lost 15 Health`;
        console.log(result);
        return this
    }


// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and  .punch() will take another Ninja instance.

// blueNinja.kick(redNinja);
// // -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// // In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength

}



var ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
//-> "My ninja name is Hyabusa!"

ninja1.showStats();
// "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
ninja1.drinkSake(); //should add 10 to health
ninja1.showStats();
// "Name: Hayabusa, Health: 110, Speed: 3, Strength: 3"


var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
blueNinja.showStats();
redNinja.showStats();

redNinja.punch(blueNinja);
blueNinja.showStats();
blueNinja.kick(redNinja);
blueNinja.showStats();
redNinja.showStats();
