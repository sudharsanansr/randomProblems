let list = [[4,5,2,7,8,9,3,6],[10,2,8,6,7,3],[7,5,4,3,2,6]];

list.forEach(el => insertionSort(el));

function insertionSort(arr){
    console.log('Before Sort: '+arr);

    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while((j >= 0) && arr[j] > current){
            arr[j+1] = arr[j]; //Swapping the elements on left by one place if they are greater than current;
            j--;
        }
        arr[j+1] = current;
    }

    console.log('After Sort: '+arr);
}