function User(fname,lname){
    this.firstName = fname;
    this.lastName = lname;
}

User.sayHello = function(){
    console.log(`User name is ${this.firstName} ${this.lastName}`);
}

let john = new User('John','Lennon');
console.log(john);
john.sayHello(); //TypeError: john.sayHello is not a function