/*Write a function that creates and returns an object.
Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.

Example: coinChange(312) returns 

{dollars: 3, dimes: 1, pennies: 2}
Example: coinChange(78) returns 

{quarters: 3, pennies: 3}
BONUS: Given an object with certain amounts of denominations of US money, alter the object so that the configuration is optimal.

Example: coinChange({dollars: 2, dimes: 15, pennies: 5}) returns

{dollars: 3, quarters: 2, nickels: 1} */



function determineChange(numberCents) {
    numDollars=Math.floor(numberCents/100);
    numCentsLeft=numberCents%100

    numQuarters=Math.floor(numCentsLeft/25);
    numCentsLeft=numCentsLeft%25;

    numDimes=Math.floor(numCentsLeft/10);
    numCentsLeft=numCentsLeft%10;

    numNickels=Math.floor(numCentsLeft/5);
    numCentsLeft=numCentsLeft%5;

    numPennies=numCentsLeft



    function Money(numDollars, numQuarters, numDimes, numNickels, numPennies) {
        this.numberDollars = numDollars;
        this.numberQuarters = numQuarters;
        this.numberDimes = numDimes;
        this.numberNickels = numNickels;
        this.numberPennies = numPennies;
    }

    var money1 = new Money(numDollars, numQuarters, numDimes, numNickels, numCentsLeft);

    //console.log(money1);


//console.log("number of dollars is:  " + money1.numberDollars)

return money1



}

result = determineChange(501);
console.log(result);

numCentsLeft

