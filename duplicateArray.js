//Make this work
//duplicate([1,2,3,4,5]); 
//[1,2,3,4,5,1,2,3,4,5]

function duplicate(arr){
    arr = arr.concat(arr);
    return(arr);
}

console.log(duplicate([1,2,3,4,5,6,7,8,9]));
