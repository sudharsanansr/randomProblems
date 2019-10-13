'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let newArr = [];
    arr.forEach(function(ar){
        if(ar.length  > 1){
            newArr.push(ar);
        }
    })

    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for(let i = 0; i < newArr.length; i++){
        console.log(newArr[i][i]);
        leftDiagonalSum += newArr[i][i];
    }

    let counter = 0;
    for(let j = newArr.length - 1; j >= 0; j--){
        rightDiagonalSum += newArr[j][counter];
        counter++;
    }

    let diagDiff = leftDiagonalSum - rightDiagonalSum;

    if(diagDiff < 0){
        return -(diagDiff);
    }
    return diagDiff;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
