/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

Basic Algorithm Scripting: Reverse a StringPassed
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  str = str.split('');
  let newStr = '';
  for(let i = str.length - 1; i >= 0; i--){
      newStr += str[i];
  }
  return newStr;
}

console.log(reverseString("hello"));