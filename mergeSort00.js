function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let middle = Math.floor(arr.length / 2);

    let left = arr.slice(0,middle);
    let right = arr.slice(middle)

    return merge(mergeSort(left),mergeSort(right));
}

function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }
  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

console.log(mergeSort([10, -1, 2, 5, 0, 6, 4, -5]));