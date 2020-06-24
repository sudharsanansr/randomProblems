/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method

Functional Programming: Combine an Array into a String Using the join Method
The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"
Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.

Passed
Your code should use the join method.
Passed
Your code should not use the replace method.
Passed
sentensify("May-the-force-be-with-you") should return a string.
Passed
sentensify("May-the-force-be-with-you") should return "May the force be with you".
Passed
sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one".
Passed
sentensify("There,has,been,an,awakening") should return "There has been an awakening".
*/

function sentensify(str) {
  // Only change code below this line
  return str.split(/\W/g).join(" ") /* +"!" */; //It works!
  // Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("The.force.is.strong.with.this.one"));
console.log(sentensify("There,has,been,an,awakening"));