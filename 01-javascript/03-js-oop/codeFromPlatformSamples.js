

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

//-----------
//learning ES6 constructors
console.log("\nstartES6\n")
// class Dot {
//   constructor(x, y) {
//       this.x = x;
//       this.y = y;
//       console.log("You created a Dot!");
//   }
// }
// const dot1 = new Dot(10, 10);


// ES5 way
// function Dot(x, y) {
//   this.x = x;
//   this.y = y;
//   this.showLocation=function() {
//       console.log("This Dot is at x " + this.x + " and y " + this.y);
//     }

    //var Person= function(name) {  ....versus....  function Person(name, age) 
    // when creating a function that function is hoisted to the top of its scope. when assigning a function to a variable, the variable is hoisted, but the assignment is not. 
    //const add = (num1, num2) => num1 + num2; an ES6 anonymous function...add is just the variable name
    // function add(num1, num2) {
    //   return num1 + num2;
    // }
    
// }
// Dot.prototype.showLocation = function() {
//   console.log("This Dot is at x " + this.x + " and y " + this.y);
// }
// var dot1 = new Dot(55, 20);
// console.log(dot1.showLocation);
//ES6 way
// class Dot {
//   constructor(x, y) {
//       this.xt = x;
//       this.yt = y;
//   }
//   showLocation() {
//       // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
//       console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//   }
// }
// const dot2 = new Dot(5, 13);
// console.log("dot2 has xt value of " + dot2.xt);

// const dot3 = new Dot(99, 13);
// console.log("dot3 has xt value of " + dot3.xt);

// dot2.showLocation();



// class Dot {
//   constructor(x, y) {
//       this.xt = x;
//       this.yt = y;
//   }
//   // prototype method
//   showLocation() {
//       console.log(`This Dot is at x ${this.xt} and y ${this.yt}`);
//       return 
//   }
//   // static method
//   static getHelp() {
//       console.log("This is a Dot class, for created Dots! A Dot takes x and y coordinates, type 'new Dot' to create one!");
//   }
// } 
// const dot3 = new Dot(4, 2);
// // we can see showLocation from our instance...
// dot3.showLocation();

// console.log(dot3.showLocation);
// // but we can't see getHelp
// console.log(dot3.getHelp);
// // however we can call getHelp this way:
// Dot.getHelp();

// console.log(dot3.xt);

//----------------------
//Inheritance and Super

// parent Dot class
// class Dot {
//   constructor(x, y) {
//       this.xt = x;
//       this.yt = y;
//   }
//   showLocation() {
//       console.log(`This Dot is at x ${this.xt} and y ${this.yt}`);
//   }
// }
// // child Circle class
// class Circle extends Dot {
//   constructor(xt, yt, radius) {
//       super(xt, yt);
//       this.radiust = radius;
//   }
// }
// // we can now create Circles
// const circle1 = new Circle(33, 33, 33);
// // same attributes as a Dot, plus a radius
// console.log(circle1);
// // and Circles can access Dot methods
// circle1.showLocation();

//-------------------------------------------
// parent Dot class
// class Dot {
//   constructor(x, y) {
//       this.x = x;
//       this.y = y;
//   }
//   showLocation() {
//       console.log(`This ${ this.constructor.name } is at x ${this.x} and y ${this.y}`);
//   }
// }
// child Circle class
// class Circle extends Dot {
//   constructor(x, y, radius) {
//       super(x, y);
//       this.radius = radius;
//   }
// }



// const dot3 = new Dot(4, 2);

// const roundthing = new Circle(4, 2,52);

// console.log(roundthing);

// roundthing.showLocation();

// ///----------------------------

// // parent Dot class
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         console.log(`This ${ this.constructor.name } is at x ${ this.x } and y ${ this.y }`);
//     }
//     // simple method in the parent class
//     parentFunction(){
//         return "This is coming from the parent!";
//     }
// }
// // child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius) {
//         super(x, y);
//         this.radius = radius;
//     }
//     // simple function in the child class
//     childFunction() {
//         // by using super, we can call the parent method
//         const message = super.parentFunction();
//         console.log(message);
//     }
// }
// const circle = new Circle(1, 2, 3);
// circle.childFunction();


//parent Dot class
class Dot {
  constructor(x, y) {
      this.xt = x;
      this.yt = y;
  }
  showLocation() {
      console.log(`This ${ this.constructor.name } is at x ${ this.xt } and y ${ this.yt }`);
  }
  // simple method in the parent class
  parentFunction(){
      return "This is coming from the parent!";
  }
}
// child Circle class
class Circle extends Dot {
  constructor(xt, yt, radius) {
      super(xt, yt);
      this.radius = radius;
  }
  // simple function in the child class
  childFunction() {
      // by using super, we can call the parent method
      const message = super.parentFunction();
      console.log(message);
  }
}
const circle = new Circle(1, 2, 3);
circle.childFunction();

//Getters and Setters
console.log("start getters and setters")

// class Pizza {
//   constructor(radius, slices) {
//       this.radiust = radius;
//       this._slicest = slices;
//   }
//   get slices () { 
//       return this._slicest; 
//   }
//   set slices (slices) { 
//       this._slicest = slices;
//   }
// };

// const pie = new Pizza(12, 6);
// console.log(pie.slices);     // we use the getter to determine how many slices we have
// pie.slices = 12;             // the setter will change the number of slices
// console.log(pie.slices);     // use the getter again to make sure our slices have doubled

// console.log("here" + pie._slicest);

// If we did not differentiate the attribute name from the getter and setter names, the above code would have put us into an infinite loop, and we would have gotten a RangeError: Maximum call stack size exceeded. It does not matter how you differentiate the names of the attributes from the Getters and Setters, but preceding the attribute with an underscore is convention.

// Custom Getters
// Using these same patterns, we can create custom Getters. Consider the following snippet:

// class Circle{
//   constructor(x, y, radius) {
//       this.xt = x;
//       this.yt = y;
//       this.radiust = radius;
//   }
//   get diameter() {
//       return this.radiust * 2;
//   }
// }
// const circle1 = new Circle(1, 2, 5);
// console.log(circle1.diameter);


// Now our Circles have a diameter attribute even though we didn't explicitly add it to the constructor.

















