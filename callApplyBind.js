var person = {
    firstName: "John",
    lastName:"Doe",
    getFullName: function(){
        return this.firstName+" "+this.lastName;
    }
}
//dummy person object

var logName = function(lang1, lang2){
    console.log("Logged: "+this.getFullName());
    console.log("Arguments: "+lang1+" "+lang2);
    console.log("-----------------");
}
//logName method

//Also works
// var logName = function(lang1, lang2){
//     console.log("Logged: "+this.getFullName());
// }.bind(person);

var logPersonName = logName.bind(person); //note that "()" function is not invoked anywhere

console.log("Is Executing? :: "+logPersonName);

//logName(); will not have access to the 'this.getFullName()'
logPersonName("en");
//.bind creates copy of a function but will not execute it.

console.log(logName.call(person,"en","es")); //.call executes the function by taking arguments/parameters, note that "()" function is not invoked anywhere

console.log(logName.apply(person,["en","es"])); //.apply is same as .call but it takes the arguments as array, , note that "()" function is not invoked anywhere

(function(lang1, lang2){
    console.log("Logged: "+this.getFullName());
    console.log("Arguments: "+lang1+" "+lang2);
    console.log("-----------------");
}).apply(person,["es","en"]); //apply using iife


//function borrowing

var person2 = {
    firstName:"Jane",
    lastName:"Doe"
}

person.getFullName.apply(person2);

console.log(person.getFullName.apply(person2));

//This enables the users to make the system point to the specific "this" keyword


//functiom currying - creating copy of a function with preset parameters
function multiply(a,b){
    return a*b;
}

var multiplyByTwo = multiply.bind(this,2); //This argument will set the var 'a' with the static variable 2
console.log(multiplyByTwo(6));

var multiplyByTwo = multiply.bind(this,2,2); //This argument will set the var 'a' & 'b' with the static variable 2
console.log(multiplyByTwo(6));

var multiplyByTwo = multiply.bind(this); //'this' points to null, so can be used with relevant parameters
console.log(multiplyByTwo(6,3));

var multiplyByThree = multiply.bind(this,3);
console.log(multiplyByThree(8));
