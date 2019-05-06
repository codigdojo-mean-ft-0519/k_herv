// Given an array of sorted numbers and a value (also a number), return whether the array contains that value. Return the index position of the value if it exists and -1 if it does not exist. 

// Do not sequentially iterate through the array. Take advantage of the fact that the array is sorted and use a 'divide and conquer' technique. Very similar to when we are searching for a word in a dictionary (the book kind) we may: 

// Start our search in the center and determine whether we need to search the back half or the front half. 
// Choose a spot around the center of the half of the array we still need to search.
// From here, determine which quarter of the array we still need to search. 
// In this way our search is very rapidly narrowed until we find out whether the value we are searching for is in the array or not.

// Example: binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93) returns -1 and should only take about 4 iterations.

// Example: binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15)returns 5.

// BONUS: What is the Big O time complexity of binary search?

// BONUS: If you solved this problem with recursion (if your function is calling itself), solve it without recursion. Otherwise, solve it again with recursion.

var testArray = [0,1,2,3]

function binarySearch(inArray, searchTerm){

    var low = 0
    var high = inArray.length-1

    var notFound=true;
    while (notFound){
        if (high < low){
            return -1;
        }
        var mid = Math.floor(low + (high -low)/2);
        if (searchTerm<inArray[mid]) {
            high=mid-1
            mid = Math.floor(low + (high -low)/2);
            
        }
        else if (searchTerm>inArray[mid]){
            low=mid+1
            mid = Math.floor(low + (high -low)/2);
        }
        else{
            var result = "Search Term " + searchTerm + " found at index of:  "  + mid;
            //console.log(result);
            return result
        }

    }

}

var searchResult=binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93);

var searchResult=binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15);
console.log(searchResult);








