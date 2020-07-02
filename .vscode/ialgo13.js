/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/

function smallestCommons(arr) {
  console.log('arr : '+arr);

  arr = arr.sort((a,b) => {
    if(a < b){
      return -1
    };
    return 1;
  });

  let newArray = [];
  for(let i = arr[0]; i <= arr[1]; i++){
      newArray.push(i);
  }
  console.log('newArray : '+newArray);
  let flag = false;
  let j = arr[1];
  while(!flag){
    flag = newArray.every((item) => {
      return j % item == 0;
    });
    j++;
  }
  console.log(j-1);
  return j-1;
}

smallestCommons([1,5]);
smallestCommons([23, 18]);
smallestCommons([2, 10]);
smallestCommons([1, 13]);

/*
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-smallest-common-multiple/16075
*/