/*

https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true

Prove (a == 1 && a == 2 && a == 3)
*/

const a = {
  i: 1,
  toString: function () {
    return a.i++;
  }
}
console.log(a);
console.log(a);
console.log(a);

if(a == 1 && a == 2 && a == 3) {
  console.log('Hello World!');
}