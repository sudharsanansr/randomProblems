function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = () => {
        return (2 * (this.length + this.width))
    };
    //this.area = (a * b);

    this.area = function(){ 
        return this.length * this.width;
    }
}

let rec = new Rectangle(4,5);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area());