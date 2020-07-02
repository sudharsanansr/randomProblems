/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/

function steamrollArray(arr) { 
  let newArray = [];
  flattenArray(arr);

  function flattenArray(arr){
    let i = 0;
    while(i < arr.length){
      if(Array.isArray(arr[i])){
        flattenArray(arr[i]);
      }
      else{
        newArray.push(arr[i]);
      }
      i++;
    }
  }
  console.log(newArray);
  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);

/*
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-steamroller/16079/5
*/