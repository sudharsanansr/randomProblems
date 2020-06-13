/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

Basic Algorithm Scripting: Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {
  return (typeof bool === 'boolean');
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false)); 
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ "a": 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho("a"));
console.log(booWho("true"));
console.log(booWho("false"));