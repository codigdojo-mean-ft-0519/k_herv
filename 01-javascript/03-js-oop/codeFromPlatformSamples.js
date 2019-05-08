

//below from JS OOP, Constructors and new
// function personConstructor(name, age) {
//     // an object literal that will be returned
//     var person = {};
//     // attributes of a person
//     person.name = name;
//     person.age = age;
//     // when attached to an object or instance, functions are called 'methods'.
//     // this is our first method, greet
//     person.greet = function(){
//         console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
//     }
//     // finally, this function must return an instance
//     return person;
// }
// // create the 'steve' instance, run greet
// var steve = personConstructor("Steve", 27);
// steve.greet();
// // create the 'anika' instance, run greet. note that it is different.
// var anika = personConstructor("Anika", 33);
// anika.greet();
// // finally note how we can refine the greet method for any particular instance
// var emily = personConstructor("Emily", 22);
// emily.greet = function() {
//     console.log("I am the greatest, ever!");
// };
// emily.greet();

// //-------
// console.log(steve.age);

// steve.greet();

//-----------------CD platform modified:

function personConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}

var emily = new personConstructor("Emily", 22);
// using this & new, we can now refer to the 'name' attribute of our instance!
emily.greet = function() {
    console.log("My name is " + this.name + " and I'm the coolest ever!");
}

//Remember: this and new go together. If you're using this in your Constructor, you must create new instances with new!
//---
console.log(emily.age)

emily.greet()

//--------------------From Scope and 'this'

function Person(name, age) {
    // create a private variable that stores a reference to the new object we create
    var self = this;
    var privateVariable = "This variable is private";
    var privateMethod = function() {
        console.log("this is a private method for " + self.name);
        console.log(self);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
var joe = new Person("Joe", 23);
//joe.greet();

//----------from  the .prototype page
console.log("\nbegin .prototype section\n");

var MyObjConstructor = function(name) {
    var myPrivateVar = "Hello"; // just to show that it is difficult to see this private var
    this.name = name; // but you can see the name!
    this.method = function() {
      console.log( "I am a method");
    };
  }
  var obj1 = new MyObjConstructor('object1');
  var obj2 = new MyObjConstructor('object2');
  console.log(obj1);
  //--may adds
  console.log(obj1.name);
  obj1.method();
  console.log(obj1);

  obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";
console.log(obj1.anotherProperty); // anotherProperty!
console.log(obj1.newProperty); // newProperty!
// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!

// Very cool! While, expectedly, the line obj1.newProperty = 'newProperty!' gave obj1 a new property that obj2 couldn't access, the code obj1.__proto__.anotherProperty = 'anotherProperty!' can be accessed by both obj1 and obj2.

// That's because they both share a prototype object since they're both instances of MyObjConstructor. That's how JavaScript does inheritance! Meanwhile, what about that other __proto__ inside the first one? That's for all objects! If you add things to it, those properties or methods can be accessed/invoked via all the objects in your program!

//another from same page
console.log("\nPrototypeExample\n")
function Cat(catName) {
    var name = catName;
    this.getName = function() {
      return name;
    };
  }
  //adding a method to the cat prototype
  Cat.prototype.sayHi = function() {
    console.log('meow');
  };
  //adding properties to the cat prototype
  Cat.prototype.numLegs = 4;
  var muffin = new Cat('muffin');
  var biscuit = new Cat('biscuit');
  console.log(muffin, biscuit);
  //we access prototype properties the same way as we would access 'own' properties
  muffin.sayHi();
  biscuit.sayHi();
  console.log(muffin.numLegs);
  // we may change an instance's attributes rather than keeping the value set by prototype
  muffin.numLegs = 3;
  // poor mutant cats: muffin.__proto__.numLegs ++;
  // doing this to muffin will cause all the cats to have 5 legs, but muffin will still have 3 legs

  //trying it
  muffin.__proto__.numLegs ++;
  console.log(muffin.numLegs);
  console.log(biscuit.numLegs);

  //----begin page ES5 OOP
  console.log("\nbegin page ES5 OOP\n");

// Define the object constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Attach class methods using .prototype
Person.prototype.greet = function() {
    console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    return this;
};
// Create new instances with the new keyword
var amelia = new Person('Amelia', 36);
// Create instance methods by attaching the function directly to an instance
amelia.sing = function() {
    console.log("Lalalala!");
};

//-----
// Private variables are scoped to the constructor with the 'var' keyword
function Car(make, model) {
    var odometer = 0;
    this.make = make;
    this.model = model;
    
    // To make functions private, we scope them to the constructor
    function updateOdometer(distance) {
        odometer += distance;
    };
    
    // 'Getter' functions help us read private variables
    this.readOdometer = function() {
      return odometer;
    }
    
    // 'Setter' functions help us update private variables
    this.drive = function(distance) {
      updateOdometer(distance);
      // return this will allow us to chain methods
      return this;
    }
}
var myCarInstance = new Car("Chevy", "Camaro");
// by returning this, we can chain drive()
myCarInstance.drive(50).drive(90); 
// private variable is undefined
console.log(myCarInstance.odometer);
// but we can read it with our getter function
console.log(myCarInstance.readOdometer());























