class Elephant {
  constructor(public age: number) {}
  birthday = () => {
    //KH:  now has arrow function, and age increments
    this.age++;
    this.age++;
    this.age++;
  };
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000);
setTimeout(function() {
  console.log(`Babar's age is ${babar.age}.`);
}, 2000);
