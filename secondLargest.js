let arr = [10,6,70,35,67,98,2,5,84,98,-9,-56,27,-45,90];
let sortedArray = sortArray(arr); //let's sort the array first
let numberSecondLargest = getSecondLargestNumber(sortedArray); //pass on the sortedArray to the function that returns second largest number

console.log("Second largest number is "+numberSecondLargest);

function sortArray(ar){
    let arrayLength = ar.length;
    for(let i = ar.length; i >= 0; i--){
        for(let j = 0; j < i; j++){
            let tempVar = "";
            if(ar[j] > ar[j+1]){
                tempVar = ar[j];
                ar[j] = ar[j+1];
                ar[j+1] = tempVar;
            }
            //console.log("iterations: "+ar); //uncomment at the start to see how the values are swapped within the array.
        }
    }
    console.log(ar);
    return ar;
}

function getSecondLargestNumber(ar){
    let tempVar2 = ar[ar.length - 1];
    let secondLargetNumber = "";
    for(let k = ar.length - 1; k >= 0; k--){
        if(ar[k] !== tempVar2){
            secondLargetNumber = ar[k];
            break;
        }
    }
    return secondLargetNumber;
}
