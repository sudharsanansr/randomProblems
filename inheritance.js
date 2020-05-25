class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function(){
    return this.w * this.h;
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle{
    constructor(side){
        super(side);
        this.side = side;
    }
    
    area = function(){
        return this.side * this.side;
    }
}

const rec = new Rectangle(3, 4);
console.log(rec.area());
const sqr = new Square(3);
console.log(sqr.area());