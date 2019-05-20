//note regarding instance variable names.  For learning purposes I like my instance variables to be different than the corresponding local variables
// it helps know in other code areas which are being used/referneced
// I realize it is not common practice

class Bike {
  priceI: number;
  max_speedI: string;
  milesI: number;

  constructor(price: number, max_speed: string) {
    this.priceI = price;
    this.max_speedI = max_speed;
    this.milesI = 0;
  }

  displayInfo(): void {
    console.log(
      `This bike's price is ${this.priceI}, Maximum speed is ${
        this.max_speedI
      }, and current logged miles:  ${this.milesI}.`
    );
  }

  ride() {
    console.log('Riding');
    this.milesI += 10;
  }

  reverse() {
    console.log('Reversing');
    this.milesI = this.milesI - 5;
  }
}

let bobsBike = new Bike(1000, '150mph');
let kimsBike = new Bike(100, '20mph');
let lisasBike = new Bike(700, '80mph');

bobsBike.ride();
bobsBike.ride();
bobsBike.ride();
bobsBike.reverse();
bobsBike.displayInfo();

kimsBike.ride();
kimsBike.ride();
kimsBike.reverse();
kimsBike.reverse();
kimsBike.displayInfo();

lisasBike.reverse();
lisasBike.reverse();
lisasBike.reverse();
lisasBike.displayInfo();

/* Answers to questions:

 What would you do to prevent the instance from having negative miles ?
   A:  In Reverse method check to ensure there are more than enough miles before subtracting 5, if not then subtract this.milesI and notify

 Which methods can return this in order to allow chaining methods?
    A:  those that are re-do methods such as reverse


*/
