//dev.to

const order = (array, index) => {
  if (array[index] > array[index + 1]) {
    // These two elements are unordered, so swap them.
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
    // Note that a swap occurred.
    return 1;
  } else {
    // Note that no swap occurred here.
    return 0;
  }
}

const bubbleSort = (array) => {
  for (;;) {
    let swapped = 0;
    for (let index = 0; index < array.length - 1; index++) {
      // Attempt to order each pair in turn, noting if a swap occurred.
      swapped |= order(array, index);
    }
    console.log(swapped);
    if (swapped === 0) {
      // If no swaps occurred the array is totally ordered.
      return array;
    }
  }
}

bubbleSort([4,3,1,2]);