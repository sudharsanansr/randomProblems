/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

Basic Algorithm Scripting: Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/
function findElement(arr, func) {
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));