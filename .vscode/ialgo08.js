/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

function fearNotLetter(str) {
  let charArray = [...str].map((item) => {
    return item.charCodeAt(0);
  }).filter((item,index,arr) => {
    return (arr[index + 1] - arr[index] > 1)
  });

  if(charArray.length > 0){
    return String.fromCharCode(charArray[0]+1)
  }
  else{
    return undefined;
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

//https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-missing-letters/16023