let array = [1,2,3,4,5,6];
let [a, ...arrayTwo] = array;
array.pop();
console.log(array);
console.log(arrayTwo);
console.log(a);