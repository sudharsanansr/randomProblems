/*
var isSquare = function(n){
    var sqrt = Math.sqrt(n);
    if((sqrt - Math.floor(sqrt)) !== 0){
        console.log(n + ' is not a square number');
    }
    else if((sqrt - Math.floor(sqrt)) < 0){
        console.log(n + ' a negative number cannot be a square number');
    }
    else{
        console.log(n + ' is a square number');
    }
}

isSquare(5);
*/

function isSquareNumber(num){
    
    if(num < 0){
        console.log('Negative number cannot be a square number');
    }
    let half = Math.floor(num / 2);
    let flag = false;
    for(let i = 0; i < half; i++){
        if(((num / i) / i) == 1){
            console.log(num + ' is a square number and '+i+' is the square root');
            flag = true;
            break;
        }
    }
    if(!flag){
        console.log(num + ' is not a perfect square number');
    }
}
isSquareNumber(21);
isSquareNumber(49);
isSquareNumber(121);
isSquareNumber(949);
isSquareNumber(9);