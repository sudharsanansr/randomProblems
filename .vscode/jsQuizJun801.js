const shape = {
    radius: 10,
    diameter(){
        return 2 * this.radius;
    },
    perimeter: () => {
        console.log(this.radius);
        return  2 * this.radius * Math.PI
    }
};

console.log(shape.diameter());
console.log(shape.perimeter());