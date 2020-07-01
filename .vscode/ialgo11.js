/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Passed
sumFibs(1) should return a number.
Passed
sumFibs(1000) should return 1785.
Passed
sumFibs(4000000) should return 4613732.
Passed
sumFibs(4) should return 5.
Passed
sumFibs(75024) should return 60696.
Passed
sumFibs(75025) should return 135721.
Passed
*/

function sumFibs(num) {
  let fibArray = [1,1];
  while(num > fibArray[fibArray.length - 1]){
    fibArray.push(fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1]);
  }

  /*
  While loop generates fibonacci sequence!
  */
  let sum = fibArray.filter((item) => {
    return (item % 2 == 1 && item <= num);
  }).reduce((sum,acc) => {
    return sum + acc;
  },0);
  console.log(sum);
  return sum;
}

sumFibs(4);
sumFibs(1);
sumFibs(1000);
sumFibs(4000000);
sumFibs(4);
sumFibs(75024);
sumFibs(75025);

/*
function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
sumFibs(4);


function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);
*/