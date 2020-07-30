//My own bubble sort, the concept is to test whether the index and index + 1 is greater? If greater, swap the values!

let arrays = [[8,4,5,1,2,37,64,22,6,89,102],[8,4,5,1,2,37,64,22,6,89,102,1]];

arrays.forEach((el) => {
    console.log(bubbleSort(el));
});

function bubbleSort(arr){
    let size = arr.length;
    while(size > 0){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        size--;
    }
    return arr;
}