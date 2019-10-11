var arr = [1,2,3,4,5,6,7,8,9];

console.log(arr);
rotateArray("left",3,arr);

function rotateArray(side, iterations, ar){

    if(!Array.isArray(ar)){
        console.log("Error: 'ar' is not a array!");
        return;
    }

    if(isNaN(iterations)){
        console.log("Error: 'iterations' is not a number!");
        return;
    }

    let tempVar;
    if(side === "left"){
        for (let iter = 0; iter < iterations; iter++){
            tempVar = ar[0];
            for(let i = 0; i < ar.length - 1; i++){
                ar[i] = ar[i+1];
            }
            console.log("iterations "+iter+"\n"+ar[ar.length - 1]);
            ar[ar.length - 1] = tempVar;
            console.log(ar);
        }
        return ar;
    }
    else if(side === "right"){
        for(let iter = 0; iter < iterations; iter++){
            tempVar = ar[ar.length -1];
            for(let j = ar.length - 1; j >= 1; j--){
                ar[j] = ar[j-1];
            }
            console.log("iterations "+iter+"\n"+ar[0]);
            ar[0] = tempVar;
            console.log(ar);
        } 
        return ar;
    }
    else{
        console.log("Error: Unable to rotate array in the specified direction '"+side+"'.");
        return;
    }
}
