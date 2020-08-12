class Rectangle extends Polygon{
    constructor(name,length,width){
        super(name);
        this.length = length;
        this.width = width;
    }

    getArea = () => this.length * this.width;

    getPerimeter = () => 2 * (this.length + this.width)
}