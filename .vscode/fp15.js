/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-a-sorted-array-without-changing-the-original-array

Functional Programming: Return a Sorted Array Without Changing the Original Array
A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

Passed
Your code should use the sort method.
Passed
The globalArray variable should not change.
Passed
nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].
Passed
nonMutatingSort(globalArray) should not be hard coded.
Passed
The function should return a new array, not the array passed to it.
*/

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = arr.slice();
  return newArray.sort((a,b) => {
    return (a < b) ? -1 : 1;
  });
  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));
console.log(globalArray);