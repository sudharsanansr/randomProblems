printStars(4);

/*
      *
    * *
  * * *
* * * *
*/

function printStars(num){
    let i = 0;
    let j = num;
    while(i < num){
      let str = '';
      str += ' '.repeat(j-1);
      str += '*'.repeat(i+1);
      console.log(str.split('').join(' '));
      i++;
      j--;
    }
}