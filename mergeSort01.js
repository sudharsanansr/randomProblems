function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    console.log("Inside MergeSort!");
    let midIndex = Math.floor(arr.length / 2);
    let left = arr.slice(0, midIndex);
    let right = arr.slice(midIndex);
    console.log("left: "+left+" right: "+right);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left,right){
    console.log("Inside Merge!");
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            resultArray.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

console.log(mergeSort([10, -1, 2, 5, 0, 6, 4, -5]));