let input = [5,4,3,2,1,7,8,9,6];

function findTop5Num(arr){
    arr = [...arr]
    let resultArray = []
    arr = arr.sort((a,b) => {
        return a - b;
    });
    for(let i = 0; i < 5; i++){
        resultArray.push(arr.pop());
    };
    return resultArray;
}

console.log(findTop5Num(input));
console.log(input);

//Returns top 5 numbers in an array

function findBottom5Num(arr){
    arr = [...arr]
    let resultArray = []
    arr = arr.sort((a,b) => {
        return a - b;
    });
    for(let i = 0; i < 5; i++){
        resultArray.push(arr.shift());
    };
    return resultArray;
}

console.log(findBottom5Num(input));
console.log(input);

//Returns bottom 5 numbers in an array