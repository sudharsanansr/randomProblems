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

//Own properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for(let prop in canary){
  if(canary.hasOwnProperty(prop)){
    ownProps.push(prop);
  }
}
console.log(ownProps);

//Setting up prototype values

function Pet(name,type,legs){
    this.name = name;
    this.type = type;
    this.legs = legs;
}

Pet.prototype.isHumanFriendly = true;

let doggy = new Pet('Beagle','Dog',4);
console.log(doggy); //Not see at the object level
console.log(doggy.isHumanFriendly); //Available at the prototype level.

//iterating over all sorts of properties

function LaptopComputer(manufacturer,model){ //Own properties
    this.manufacturer = manufacturer;
    this.model = model;
}
LaptopComputer.prototype.isKeyBoardSupported = true; //properties inherited from prototype chain

let macbook = new LaptopComputer('Apple','2017 Macbook Pro 15 inch');

let ownComputerProps = [];
let customComputerProps = [];
for(let props in macbook){
    if(macbook.hasOwnProperty(props)){
        ownComputerProps.push(props);
    }
    else{
        customComputerProps.push(props);
    }
}
console.log(ownComputerProps);
console.log(customComputerProps);

//Undertanding the constructor properties

function Movie(type,length){
    this.type = type;
    this.length = length;
}

let comicMovie = new Movie('Comedy','2H 44Mins');

console.log(comicMovie);
console.log(comicMovie.constructor);
console.log(comicMovie.constructor === Movie);
console.log(typeof (comicMovie.constructor));

//Setting up prototype properties all in once with a new object

function Avengers(){
};

Avengers.prototype = {
    isSuperHeroTeam : true,
    teamQuote: function(){
        return 'Avengers Assemble';
    }
}

console.log(Avengers.prototype.teamQuote()); //Accessing without initiating an instance object.

let ironMan = new Avengers();
console.log(ironMan.isSuperHeroTeam);
console.log(ironMan.teamQuote()); //Accessing with initiating an instance object.

//One thing to remember in setting up the prototype with a new Object, the constructor reference will be pointed to Object, which is the parent constructor for all objects in JavaScript

function GuardiansOfTheGalaxy(){
}

GuardiansOfTheGalaxy.prototype = {
    constructor: GuardiansOfTheGalaxy,
    isSuperHeroTeam: true,
    teamQuote: function(){
        return 'Go Guardians Go';
    }
}

let starLord = new GuardiansOfTheGalaxy();

console.log(ironMan.constructor === Avengers); //returns false because constructor points to native object;
console.log(starLord.constructor === GuardiansOfTheGalaxy); //returns true because constructor points to same object;