class Person {
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log('Hello '+this.name);
    }
}
/*
let ayush = new Person('Ayush');
ayush.sayHello();
*/

class Teacher extends Person{
    constructor(name,subject){
        super(name);
        this.subject = subject;
    }

    sayStream(){
        console.log('Hello '+this.name+', Professor of '+this.subject);
    }
}

class ComputerTeacher extends Teacher{
    constructor(name,subject,field){
        super(name,subject);
        this.field = field;
    }

    sayInterested(){
        console.log('Interested in '+this.field);
    }
}

/*
let ayur = new Teacher('Ayur','Mathematics');
ayur.sayHello();
ayur.sayStream();

console.log(Object.keys(new Person()));
console.log(Object.keys(new Teacher()));
*/

let anas = new ComputerTeacher('Anas','Mathematics','Machine Vision Technology');
anas.sayHello();
anas.sayStream();
anas.sayInterested();