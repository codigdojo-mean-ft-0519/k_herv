//Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

//Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function maxMinAvg(arrParam){
    var sum=arrParam[0];
    var max = arrParam[0];
    var min = arrParam[0];
    for (var i=1; i < arrParam.length; i++) {
        sum += arrParam[i];
        if (arrParam[i]>max){
            max=arrParam[i];
        }
        if (arrParam[i]<min){
            min = arrParam[i];
        }


        console.log(arrParam[i]);




    }
    return "The minimum is " + min + ", the maximum is " + max +  ", and the average is " + sum/arrParam.length + "."
}

var resultReturn = maxMinAvg([3, -2, 9, 4, 5, 7, 8, 9]);
var resultReturn = maxMinAvg([1, -2, 9, 4]);
console.log(resultReturn)









