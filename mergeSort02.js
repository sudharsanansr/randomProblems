console.log("before: "+[10, -1, 2, 5, 0, 6, 4, -5]);

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let midIndex = Math.floor(arr.length / 2);
    let left = arr.slice(0,midIndex);
    let right = arr.slice(midIndex);

    return merge(mergeSort(left),mergeSort(right));

}

function merge(left,right){
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while((leftIndex < left.length) && (rightIndex < right.length)){
        if(left[leftIndex] < right[rightIndex]){
            resultArray.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log("After: "+mergeSort([10, -1, 2, 5, 0, 6, 4, -5]));