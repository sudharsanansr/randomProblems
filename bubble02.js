//Optimized

function bubbleSort(iterarr){

    if(!Array.isArray(iterarr)){ // Checking given input is a valid array
        console.error('Not an array!');
        return;
    }

    let arr = [...iterarr]; // Copied the array elements using spread operator

    if(arr.length == 1){
        return arr; //If array has only one element it's already sorted
    }

    let isSorted = false;

    while(!isSorted){ //Outer loop
        isSorted = true;
        for(let i = 0; i < arr.length - 1; i++){ //Inner loop
            if(arr[i] > arr[i+1]){ //Trying to check which of the element is bigger current(i) or the next element(i+1)
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp; //Above 3 lines does the swapping using the temp variable
                isSorted = false;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4,2,3,1]));
console.log(bubbleSort([8,4,5,1,2,37,64,22,6,89,102]));
console.log(bubbleSort([8,4,5,1,2,37,64,22,6,89,102,1]));
console.log(bubbleSort([4,5,2,7,8,9,3,6]));
console.log(bubbleSort([4,5,2,7,8,9,3,6,1]));