let arr = [1,2,3,4,5,6,8];

function addNumbers(ar){
    console.log(ar);
    ar.splice(a,b); //3,2
    console.log(ar);
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    console.log(sum); //Should be 20, what is a & b?
}
addNumbers(arr);