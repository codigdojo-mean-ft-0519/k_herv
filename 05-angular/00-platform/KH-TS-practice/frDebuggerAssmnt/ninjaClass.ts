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
