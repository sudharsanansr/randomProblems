let arr = ["a","b",["d","e"],["f"],["d"],["c","f"]];
//output: ["a","b","d","e","f","d","c","f"]

let output = [];

stripArray(arr);

function stripArray(ar){
    for(let i = 0; i < ar.length; i++){
        if(isArrayCheck(ar[i])){
            stripArray(ar[i]);
        }
        else{
            output.push(ar[i]);
        }    
    }
}

function isArrayCheck(input){
    return Array.isArray(input);
}

console.log(output.length);
console.log(output);
