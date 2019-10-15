// Sum = 6
// Input = [1,2,3,4,5,6,7,8,9,0]
// Output = [1,2,3],[5,1,0],[2,4,0] //all possible triplets within the input array shared which sums up to the "SUM" value.

let input = [7,2,1,5,4,8,3,0,9,6];
let sum = 10;
let iterationArray = [];

for(let i = 0; i < input.length; i++){
    if(input[i] <= sum){
        iterationArray.push(input[i]);
    }
}

//console.log(iterationArray);

iterationArray.sort(function(a,b){
    if(a < b){
        return -1;
    }
    else{
        return 1;
    }
})

//console.log(iterationArray);

let possibilites = [];

for(let i = iterationArray.length; i >= 0 ; i--){
    let potentialSum = iterationArray[i];
    if(potentialSum <= sum){
        for(let j = iterationArray[i] - 1; j >=0; j--){
            let potentialSumTwo = potentialSum + iterationArray[j];
            if(potentialSumTwo <= sum){
                for(let k = iterationArray[j] - 1; k >= 0; k--){
                    let potentialSumThree = potentialSumTwo + iterationArray[k];
                    if(potentialSumThree === sum){
                        let dummyArray = [];
                        dummyArray.push(iterationArray[i]);
                        dummyArray.push(iterationArray[j]);
                        dummyArray.push(iterationArray[k]);
                        possibilites.push(dummyArray);
                    }
                }
            }
        }
    }
}

console.log(possibilites);
