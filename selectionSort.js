function selectionSort(arr){
    console.log('Input: '+arr);
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i; //Assuming current element is the smallest
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j; //Finding the index of the smallest element
            }
        }
        //Swapping the elements
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log('Output: '+arr);
    return arr;
}

selectionSort([1,4,2,3,6,5]);