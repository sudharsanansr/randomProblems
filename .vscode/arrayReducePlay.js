const array = [1, 2, 3, 4];

let sum = array.reduce((sum,accumulator) => {
    console.log("Sum >> "+sum+" Acc >> "+accumulator);
    return sum + accumulator;
},0);

console.log(sum);