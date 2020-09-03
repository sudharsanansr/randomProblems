let arr = [5,4,3,1,2,8,7,6];

function mergeSort(input){
    if(input.length <= 1){
        return input;
    }

    let pivot = Math.floor(input.length / 2);
    let left = input.slice(0, pivot);
    let right = input.slice(pivot);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while((leftIndex < left.length) && (rightIndex < right.length)){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log("input: "+arr);
console.log("output: "+mergeSort(arr));