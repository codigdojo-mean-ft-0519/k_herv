
function bubbleSort(inArray) {
    for(var k=0; k<inArray.length; k++) {
        var didswap = false
        for(var i=1; i<inArray.length-k; i++) {
            var temp;
            if (inArray[i-1]>inArray[i]) {
                didswap = true
                temp = inArray[i];
                inArray[i]=inArray[i-1]
                inArray[i-1]=temp
            }
        }   
        if (!(didswap)) {
            return inArray + "i is " + i + " and k is " + k;
        }
    
    }
    return inArray;

}

var result=bubbleSort([3,2,1,0])
console.log (result);






//Classify each of the following functions according to their Big O Time complexity:

function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

//Answer:  Big (n)

function findNth(arr, n){
    console.log(arr[n]);
}

//Answer:  Big(1)

function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}


//(logn)


function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}

//Answer:  O(n2)





