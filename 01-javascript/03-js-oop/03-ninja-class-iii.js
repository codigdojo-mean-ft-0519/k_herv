// Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):

// name
// health
// speed
// strength
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 health to the Ninja
// Part II - Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

// // example output
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// // -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei.showStats();
// // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


class Ninja {
    constructor(name) {
        this.nameT=name;
        this.healthT=100;
        this.speedT=3;
        this.strengthT=3;
    }

    sayName(){
        console.log(`Name is ${this.nameT}`);
    }

    showStats(){
        console.log(`Name: ${this.nameT} , Strength: ${this.strengthT} , Speed: ${this.speedT}, Health: ${this.healthT}`);
        return this;
    }

    drinkSake() {
        this.healthT +=10;
        return this;
    }
}


class Sensei extends Ninja {
  constructor(nameT) {
      super(nameT);
    this.healthT=200;
    this.speedT=10;
    this.strengthT=10;
    this.wisdomT=10
  }
  showStats(){
    console.log(`Name: ${this.nameT} , Strength: ${this.strengthT} , Speed: ${this.speedT}, Health: ${this.healthT}, Wisdom: ${this.wisdomT}`);
    return this;
}
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}  




const ninja1 = new Ninja("Bill");

console.log(ninja1.nameT);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const sensei1 = new Sensei("Miyagi");

sensei1.sayName();
sensei1.showStats();
sensei1.drinkSake();
sensei1.showStats();
