/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

Object.keys(bob).length should return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return "Bob".
bob.getLastName() should return "Ross".
bob.getFullName() should return "Bob Ross".
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
*/

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let name = firstAndLast;

  this.getFullName = function() {
    return name;
  };

  this.getFirstName = function(){
    return name.split(' ')[0];
  };

  this.getLastName = function(){
    return name.split(' ')[1];
  };

  this.setFirstName = function(firstName){
    name = firstName + ' ' + name.split(' ')[1];
  }

  this.setLastName = function(lastName){
    name = name.split(' ')[0] + ' ' + lastName;
  }
  
  this.setFullName = function(firstAndLast){
    name = firstAndLast;
  }
};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName());
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName());
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getFullName());
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getFirstName());
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getLastName());

/*
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-make-a-person/16020
*/