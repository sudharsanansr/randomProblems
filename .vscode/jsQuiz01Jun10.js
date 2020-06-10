/*
class Car{
    constructor(make) {
        this.make = make || 'a car';
    }
    sayMake() {
        return `I own ${this.make}!`;
    }
}

const myCar = new Car('Lamborghini');
console.log(myCar.sayMake());
*/

function Car(){
    this.make = 'Lamborghini';
    return {
        model: 'TX200',
        make: this.makea
    };
}

const myCar = new Car();
console.log(myCar.model);
console.log(myCar.make);