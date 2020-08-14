//Create a function that takes two numbers as arguments (num, length) and returns and array of multiples of num up to Length

function returnMultiple(num,length){
    let result = [];
    for(let i = 1; i <= length; i++){
        result.push(num * i);
    }
    console.log('result: '+result);
}

returnMultiple(7,5);