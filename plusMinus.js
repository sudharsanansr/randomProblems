'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let result = {
        positive: 0,
        negative: 0,
        neutral: 0
    };
    arr.forEach(function(ar){
        if(ar > 0){
            result.positive++;
        }
        else if(ar < 0){
            result.negative++;
        }
        else{
            result.neutral++
        }
    })
    
    for(let keys in result){
        console.log(result[keys] / arr.length);
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
