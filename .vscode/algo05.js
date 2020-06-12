/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

Basic Algorithm Scripting: Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
  if(num < 0){
    return '';
  }
  else{
    let finalString = '';
    for(var i = 0; i < num; i++){     
      finalString += str;
    }
    return finalString;
  }
}
console.log(repeatStringNumTimes("abcd", 5));