let arr = ["a","b",["d","e"],["f"],["d"],["c","f"]];
//op: ["a","b","d","e","f","d","c","f"]

let output = [];

stripArray(arr);

function stripArray(ar){
    let finalArray = [];
    for(let i = 0; i < ar.length; i++){
        var tempArray = [];
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
