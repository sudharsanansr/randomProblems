let arr1 = [];

for(var i = 0; i < 5; i++){
    arr1.push(() => i);
}

console.log(arr1.map(x => x()));