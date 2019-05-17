var Elephant = /** @class */ (function() {
  function Elephant(age) {
    var _this = this;
    this.age = age;
    this.birthday = function() {
      //KH:  now has arrow function, and age increments
      _this.age++;
      _this.age++;
      _this.age++;
    };
  }
  return Elephant;
})();
var babar = new Elephant(8);
setTimeout(babar.birthday, 1000);
setTimeout(function() {
  console.log("Babar's age is " + babar.age + '.');
}, 2000);
