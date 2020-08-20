let list00 = [[4,5,2,7,8,9,3,6],[10,2,8,6,7,3],[7,5,4,3,2,6]];
let list01 = [[4,5,2,7,8,9,3,6],[10,2,8,6,7,3],[7,5,4,3,2,6]];

list00.forEach(el => {
    bubbleSort(el);
});

list01.forEach(el => {
    insertionSort(el);
});
//bubbleSort
function bubbleSort(arr){
    console.log("--- bubbleSort() start ---");
    console.log("Before Sort: "+arr);
    let size = arr.length;
    let iteration = 0;
    while(size > 0){
        iteration++;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        console.log("Array Iteration: "+arr);
        size--;
    }
    console.log('iteration: '+iteration);
    console.log("After Sort: "+arr);
    console.log("--- bubbleSort() end ---");
}

//insertionSort
function insertionSort(arr){
    console.log("--- insertionSort() start ---");
    console.log("Before Sort: "+arr);
    for(var i = 0; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while((j >= 0) && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
        console.log("Array Iteration: "+arr);
    }
    console.log("After Sort: "+arr);
    console.log("--- insertionSort() end ---");
}