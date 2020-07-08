printStars(4);
printStars(6);
printStars(0);
/*

* 
* *
* * *
* * * *

*/

function printStars(num){
    for(let i = 0; i < num; i++){
        let arr = [];
        for(j = -1; j < i; j++){
            arr.push('*');
        }
        console.log(arr.join(" "));
    }
}