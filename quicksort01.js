function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[arr.length - 1];
    console.log('pivot: '+pivot);
    let left = arr.filter((el) => el < pivot);
    let right = arr.filter((el) => el > pivot);
    console.log('left: '+left);
    console.log('right: '+right);

    return [...quickSort(left),pivot, ...quickSort(right)];
}

console.log(quickSort([5,3,4,2,1,7,6]));