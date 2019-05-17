
//1. Setting types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
//KH:  answer:  can't switch types once declared.
//KH:  my solution, make 9 a string, then cast to new var
myString = '9';  //using string
let myNumber: Number = Number(myString) //cast to Number

//------------===
//2. Setting the types for function parameters
function sayHello(name: string){
  return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
//KH:  sayHello requires a string, so I changed Number 9 to string '9'
console.log(sayHello('9'));

//3. Optional parameters
function fullName(firstName: string, lastName: string, middleName: string){
  let fullName = `${firstName} ${middleName} ${lastName}`;
  return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
//KH:  problem was it needed three strings and bug version only passing two..I added "Bucky"
console.log(fullName("Jimbo", "Jones", "Bucky"));

//4. Interfaces and function parameters
interface Student {
  firstName: string;
  lastName: string;
  belts: number;
}
function graduate(ninja: Student){
  return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
  firstName: "Christine",
  lastName: "Yang",
  belts: 2
}
const jay = {
  firstName: "Jay",
  lastName: "patel",
  belts: 4  //KH:  Interface requires "belts", but buggy version had "belt"
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

//5. Classes and function parameters
class Ninja {
  fullName: string;
  public firstName: string;
  public lastName: string;
  //KH:  removed the extra "firstname variable"  this.fullName = `${firstName} ${lastName}`;
    }
 this.debug(){  //KH:  added "this"
    console.log("Console.log() is my friend.")
 }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja(); //KH:  added "new"
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
 fullName: "Alan Turing",
 firstName: "Alan",
 lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
 return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));


//6. Arrow functions
let increment = x => x + 1;
// This works great:
console.log(increment(3));
let square = x => (x * x); //changed to parentheses
// This is not showing me what I want:
console.log(square(4));
// This is not working:
let multiply = (x,y) => x * y;  //KH:  x, y needed parentheses
// Nor is this working:
let math = (x, y) => x + y;  //removed let sum =
function doMath() { Number //KH:  Made function and gave it a return type so it could be called on 17
    let x = 2; //KH:  x used below, but not defined
    let y = 4;  //KH  y used below but not defined
    let product = x * y;
    let difference = Math.abs(x - y);
    let sum = 22; //KH:  sum used below but not defined
    return [sum, product, difference];
}

//7. Arrow functions and 'this'

class Elephant {
  constructor(public age: number){}
  birthday =() =>{  //KH:  now has arrow function, and age increments
     this.age++;
  }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
  console.log(`Babar's age is ${babar.age}.`)
  }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

//Question: I am not good at arrow functions, but used this website and got #7 to increment as requested.
//But how/why?
