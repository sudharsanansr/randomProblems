var result = compareTriplets([12,10,7],[17,6,52,31]);

console.log(result);

function compareTriplets(a, b) {
    let len;
    if(a.length === b.length){
        len = a.length;
    }

    if(a.length > b.length){
        len =  b.length;
    }
    else{
        len = a.length;
    }
    
    let scoreArray = [0,0];

    for(let i = 0; i < len; i++){
        if(a[i] > b[i]){
            scoreArray[0] = scoreArray[0]+1;
        }
        else if(a[i] < b[i]){
            scoreArray[1] = scoreArray[1]+1;
        }
        else{
        }
    }

    return scoreArray;

}
