function Animal(type,properties) {
    this.type = type || 'Unknown animal';
    this.properties = properties || 'do something!';
    this.capabilities = function (){
        return `It's a `+this.type+` that can `+this.properties;
    };
};

function Dog(){
    this.uniqueQuality = function (){
        console.log("Human's Friend!");
    }
}

function Bird(){
    this.uniqueQuality = function (){
        console.log("Human's pet not a friend!");
    }
}

let duck = new Animal();
duck.prototype = Object.create(Animal.prototype);