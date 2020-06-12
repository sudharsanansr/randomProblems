/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

Basic Algorithm Scripting: Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  if(num >= str.length){
    return str;
  }
  else{
    return str.substring(0,num)+'...';
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));