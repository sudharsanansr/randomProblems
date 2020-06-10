/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  str = str.split(' ');
  var temp = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i].length > temp){
      temp = str[i].length;
    }
  }
  return temp;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));