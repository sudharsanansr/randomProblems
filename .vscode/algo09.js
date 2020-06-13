/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
*/

function titleCase(str) {
  str = str.split(' ');
  let newStr = [];
  str.forEach((strInst) => {
    newStr.push(strInst.substring(0,1).toUpperCase()+''+strInst.substring(1,strInst.length).toLowerCase());
  });
  return newStr.join(' ');
}

titleCase("I'm a little tea pot");

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));