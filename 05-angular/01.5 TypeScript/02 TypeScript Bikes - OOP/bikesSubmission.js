//note regarding instance variable names.  For learning purposes I like my instance variables to be different than the corresponding local variables
// it helps know in other code areas which are being used/referneced
// I realize it is not common practice
var Bike = /** @class */ (function() {
  function Bike(price, max_speed) {
    this.priceI = price;
    this.max_speedI = max_speed;
    this.milesI = 0;
  }
  Bike.prototype.displayInfo = function() {
    console.log(
      "This bike's price is " +
        this.priceI +
        ', Maximum speed is ' +
        this.max_speedI +
        ', and current logged miles:  ' +
        this.milesI +
        '.'
    );
  };
  Bike.prototype.ride = function() {
    console.log('Riding');
    this.milesI += 10;
  };
  Bike.prototype.reverse = function() {
    console.log('Reversing');
    this.milesI = this.milesI - 5;
  };
  return Bike;
})();
var bobsBike = new Bike(1000, '150mph');
var kimsBike = new Bike(100, '20mph');
var lisasBike = new Bike(700, '80mph');
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
