//Defining constructor

function Human(){
    this.legs = 2;
    this.eyes = 2;
    this.ears = 2;
}

//Creating object from constructor

let male = new Human();
console.log(male);

//Defining constructor with default values and parameters

function Vehicle(name,type){
    this.name = name;
    this.type = type;
    this.usedForTransport = true; //Default parameter
}

let myCar = new Vehicle('Maserati','Car');
console.log(myCar);

//Instance of check
console.log(myCar instanceof Vehicle);

