let arr = [1,2,3];

let timesTwo = function(arr,fn){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]))
    }
    return newArr;
}

console.log(timesTwo(arr,function(item){
    return item * 2;
}));

//using functional programming
