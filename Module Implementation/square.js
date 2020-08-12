class Square extends Polygon{
    constructor(name,side){
        super(name);
        this.side = side;
    }
    getArea = () => Math.pow(this.side,2);

    getPerimeter = () => 4 * this.side;
}