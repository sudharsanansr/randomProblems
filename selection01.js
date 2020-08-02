let lists = [[4,5,2,7,8,9,3,6],[10,2,8,6,7,3],[7,5,4,3,2,6,1]];
lists.forEach((el) => {
    console.log('Before Sort: '+el);
    selectionSort(el);
});

function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log(arr);
}