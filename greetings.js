class Greetings {
    constructor(firstName,lastName){
        this.firstName = (firstName != null) ? firstName : '';
        this.lastName = (lastName != null) ? lastName : '';
    }

    sayHello(){
        let greet = this.getRandomGreeting();
        return `${greet}, ${this.firstName} ${this.lastName}`;
    }

    getRandomGreeting(){
        let greet = ['Hey','Hi','Hello','Howdy','Good day'];
        return greet[Math.floor(greet.length * Math.random())];
    }
}

console.log(new Greetings('Mohan','Raj').sayHello());
console.log(new Greetings().getRandomGreeting());
