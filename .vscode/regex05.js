/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/extract-matches

Regular Expressions: Extract Matches
So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example:

"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');
Apply the .match() method to extract the word coding.

*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result); // Change this line