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
      let str = ' '.repeat(j-1).concat('*'.repeat(i+1)).split('').join(' ');
      console.log(str);
      i++;
      j--;
    }
}