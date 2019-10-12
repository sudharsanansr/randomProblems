let arr = [1,-3,4,2,-3,9,-4,-5];
let positiveArr = [];
let negativeSum = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        negativeSum += arr[i];
    }
    else{
        positiveArr.push(arr[i]);
    }
}

let nullifier = -(negativeSum);

let filteredArray = positiveArr.filter(function(ar){
    if(ar <= nullifier){
        return true;
    }
})

console.log(filteredArray);

let allPossibleCombos = (function(fArray){
    let possibilities = [];
    for(let i = fArray.length; i >= 0 ; i--){
        for(let j = 0; j < fArray.length ; j++){
            if(fArray.slice(j,i).length > 0){
                possibilities.push(fArray.slice(j,i))
            }
        }
    }
    return possibilities;
})(filteredArray)

console.log(allPossibleCombos);

let indexSumCombo = function(allPossibleCombos,nullifier) { 
    let index; 
    for(i = 0; i < allPossibleCombos.length; i++){
        let sum = 0;
        for(j = 0; j < allPossibleCombos[i].length; j++){
            sum += allPossibleCombos[i][j];
            if(sum === nullifier){
                index = j;
                break;
            }
        }
    }
    return j;
}

let finalCombo = allPossibleCombos[indexSumCombo(allPossibleCombos,nullifier)];

console.log(finalCombo);
console.log(positiveArr);

for(let i = 0; i < finalCombo.length; i++){
    positiveArr.splice(positiveArr.indexOf(finalCombo[i]),1);
}

console.log(positiveArr);
