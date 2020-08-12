class Polygon{
    constructor(name){
        this.name = name;
    }

    getName = () => this.name;
}

class Rectangle extends Polygon{
    constructor(name,length,width){
        super(name);
        this.length = length;
        this.width = width;
    }

    getArea = () => this.length * this.width;

    getPerimeter = () => 2 * (this.length + this.width)
}

class Circle extends Polygon {
    constructor(name,radius){
        super(name);
        this.radius = radius
    }

    getDiameter = () => 2 * this.radius;

    getArea = () => Math.PI * Math.pow(this.radius,2);

    getPerimeter = () => 2 * Math.PI * this.radius;
}

let cir = new Circle('Circle',3);
console.log(cir.getName());
console.log(cir.getPerimeter());
console.log(cir.getArea());
console.log(cir.getDiameter());