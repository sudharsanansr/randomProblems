// Refer to this link

// https://www.hackerrank.com/rest/contests/master/challenges/birthday-cake-candles/hackers/argyle_socks/download_solution?primary=true

function processData(input) {
  let inputLines = input.trim().split('\n');
  let nCandles = parseInt(inputLines[0]);
  let candles = inputLines[1].trim().split(' ').map(Number);
  let candleCount = 0;
  let max = 0;

  // sort descending order
  candles.sort((a, b) => b - a);

  // see how many candles have the max height
  max = candles[0];
  for (let i = 0; i < nCandles; i++) {
    if (candles[i] === max) {
      candleCount++;
    }
  }

  console.log(candleCount);
}
