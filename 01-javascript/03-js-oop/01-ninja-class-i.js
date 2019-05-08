// Assignment: Ninja Class
// Create a new object constructor called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja
// Example Outputs
// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

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
        console.log(`Name: ${this.nameT} , Health is ${this.healthT} , Speed: ${speed} , Strength${strength}`   )
    }
    
    this.drinkSake = function() {
        this.healthT +=10;
    }


    // this.method = function() {
    //     console.log( "I am a method");

    // var privateMethod = function() {
    //     console.log("this is a private method for " + self.name);
    //     console.log(self);
    // }
    // this.age = age;
    // this.greet = function() {
    //     console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    //     // we can access our attributes within the constructor!
    //     console.log("Also my privateVariable says: " + privateVariable)
    //     // we can access our methods within the constructor!
    //     privateMethod();
    // }
}

var ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
//-> "My ninja name is Hyabusa!"

ninja1.showStats();
// "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
ninja1.drinkSake(); //should add 10 to health
ninja1.showStats();
// "Name: Hayabusa, Health: 110, Speed: 3, Strength: 3"