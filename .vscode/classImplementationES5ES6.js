//ES6 Implementation Class
class Person{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }

    greet(){
        return `Hello ${this.fname} ${this.lname}`;
    }
}

console.log(new Person('John','Doe').greet());

//ES5 Implementation Class

function PersonES5(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    };
}

PersonES5.prototype.greet = function(){
    return `Hey ${this.firstName} ${this.lastName}`
}

console.log(new PersonES5('Jane','Doe').sayHello());
console.log(new PersonES5('Jon','Snow').greet());