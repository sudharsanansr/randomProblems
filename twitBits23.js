// https://wsvincent.com/javascript-hoisting/

console.log(typeof(hoistMe)); // ReferenceError: typeOf is not defined

var hoistMe = function () {
  console.log("I'm a hoisted function.");
}