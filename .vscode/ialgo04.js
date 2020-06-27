/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

function spinalCase(str) {
  str = str.split('');
  console.log(str);
  let i = 0;
  while(i < str.length) {
    str.shift().toLowerCase();
  }
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");