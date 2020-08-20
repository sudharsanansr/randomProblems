function bubbleSort(iterarr){

    if(!Array.isArray(iterarr)){ // Checking given input is a valid array
        console.error('Not an array!');
        return;
    }

    let arr = [...iterarr]; // Copied the array elements using spread operator
    
    if(arr.length == 1){
        return arr; //If array has only one element it's already sorted
    }

    let isSorted = false; //Assuming the array is not sorted

    while(!isSorted){ //Loop breaks if the array is sorted
        isSorted = true; //Assuming the array is sorted
        for(let i = 0; i < arr.length - 1; i++){ //Loop for iterating through elements
            if(arr[i] > arr[i+1]){ //Trying to check which of the element is bigger current(i) or the next element(i+1)
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp; //Above 3 lines does the swapping using the temp variable
                isSorted = false; //If swap happens that means array is not sorted yet
            }
        }
    }
    return arr;
}