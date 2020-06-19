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