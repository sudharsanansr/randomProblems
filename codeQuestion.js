/*
Rearrange a given array (that contains equal number of positive & negative numbers) such that +ve and -ve are arranged alternatively. Respective order should be maintained.
Make changes in same array and no returning or printing in needed.

Sample Input :
6
1 2 3 -1 -2 -3
Sample Output :
1 -1 2 -2 3 -3 
*/

function rearrangeArray(inputArray){

    if(inputArray.length % 2 != 0){
        return;
    }

    var outputArray = [];
    for(var i = 0; i < inputArray.length / 2; i++){
        var temp = inputArray.indexOf(-(inputArray[i]));
        if(inputArray[i] > inputArray[temp]){
            outputArray.push(inputArray[i]);
            outputArray.push(inputArray[temp]);
        }
        else{
            outputArray.push(inputArray[i]);
            outputArray.push(inputArray[temp]);
        }  
    }
    return outputArray;
}

console.log(rearrangeArray([1,2,3,-1,-2,-3]));
console.log(rearrangeArray([-3,2,-1,1,3,-2]));
