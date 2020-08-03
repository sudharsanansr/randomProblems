//Function Currying
sayHello('Hi')('Sudharsanan')('Ravichandran');

function sayHello(greeting){
    return function(fname){
        return function(lname){
            console.log(greeting + ' ' + fname + ' ' + lname);
        }
    }
}