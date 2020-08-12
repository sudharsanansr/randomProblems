import Polygon from './polygon.js'
class Circle extends Polygon {
    constructor(name,radius){
        super(name);
        this.radius = radius
    }

    getDiameter = () => 2 * this.radius;

    getArea = () => Math.PI * Math.pow(this.radius,2);

    getPerimeter = () => 2 * Math.PI * this.radius;
}