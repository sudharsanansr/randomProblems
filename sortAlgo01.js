let list00 = [[4,5,2,7,8,9,3,6],[10,2,8,6,7,3],[7,5,4,3,2,6]];
let list01 = [[4,5,2,7,8,9,3,6],[10,2,8,6,7,3],[7,5,4,3,2,6]];

list00.forEach(el => insertionSort(el));
list01.forEach(el => bubbleSort(el));

function insertionSort(arr){
    console.log('Before Sort: '+arr);
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while((j >= 0) && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    console.log('After Sort: '+arr);
}

function bubbleSort(arr){
    console.log('Before Sort: '+arr);
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
    console.log('After Sort: '+arr);
}