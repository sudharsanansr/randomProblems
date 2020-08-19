/*
Rosetta Code: 100 doors
There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.
getFinalOpenedDoors should be a function.
getFinalOpenedDoors should return an array.
getFinalOpenedDoors should produce the correct result.
*/

function getFinalOpenedDoors(numDoors) {
    let arr = new Array(numDoors).fill(false);
    let stepCount = 1;
    let i;
    while(stepCount <= numDoors) {
        for(i = stepCount - 1; i < numDoors; i = i + stepCount){
            if(arr[i]){
                arr[i] = false
            }
            else{
                arr[i] = true;
            }
        }
        stepCount++;
    }

    return arr.map((el,index) => {
        if(Boolean(el)){
            return index + 1;
        }
    }).filter(el => Boolean(el));
}

console.log(getFinalOpenedDoors(100));

// 1,2,3,4,5,6,7,8,9,10 (+1)
// 2,4,6,8,10 (+2)
// 3,6,9 (+3)
// 4,8 (+4)
// 5,10 (+5)
// 6 (..)
// 7 (..)
// 8 (..)
// 9 (..)
// 10 (..)