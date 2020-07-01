/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

function sumPrimes(num) {
  let numberArray = [];
  let i = 2;
  while(i <= num){
    numberArray.push(i);
    i++;
  }
  console.log(numberArray);
  let primeArray = numberArray.filter((item) => {
      let flag = true;
      for(i = 2; i < item; i++){
          if(item % i == 0){
              flag = false;
              break;
          }
      }
      return flag;
  })
  console.log(primeArray);
  let sumPrime = primeArray.reduce((sum,acc) => {
      return sum + acc;
  },0);
  console.log(sumPrime);
  return sumPrime;
}

sumPrimes(10);
sumPrimes(977);

/*
More details at https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-primes/16085
*/