//My own bubble sort, the concept is to test whether the index and index + 1 is greater? If greater, swap the values!

let arrays = [[8,4,5,1,2,37,64,22,6,89,102],[8,4,5,1,2,37,64,22,6,89,102,1],[4,3,1,2],[4,5,2,7,8,9,3,6]];

arrays.forEach((el) => {
    console.log('Before Sort: '+ el);
    console.log('After Sort: '+bubbleSort(el));
});

function bubbleSort(iterarr){

    if(!Array.isArray(iterarr)){ // Checking given input is a valid array
        console.console.error('Not an array!');
        return;
    }

    let arr = [...iterarr]; // Copied the array elements using spread operator
    let size = arr.length;
    
    if(size == 1){
        return arr;
    }

    let isSorted = false;
    let iteration = 0;

    while(!isSorted){ 
        iteration++;
        isSorted = true;
        for(let i = 0; i < arr.length - 1; i++){ 
            if(arr[i] > arr[i+1]){ 
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp; 
                isSorted = false;
            }
        }
    }
    console.log(iteration);
    return arr;
}