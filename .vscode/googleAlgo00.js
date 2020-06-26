/*
sumToCheck = 8
Input 1: arr = [1,2,3,9]; should return 'not found'
Input 2: arr = [1,2,4,4]; should return 'found'
*/

let sumToCheck = (arr,value) => {
    arr = arr.sort((a, b) => {
        if(a < b){
            return -1;
        }
        return 1;
    })

    let i = 0;
    let j = arr.length -1;
    let initialSum = arr[i] + arr[j];

    while((initialSum != value) && (i != j)){
        if(initialSum > value){
            j--;
            initialSum = arr[i] + arr[j];
        }
        else{
            i++;
            initialSum = arr[i]+arr[j];
        }
    }

    if(initialSum == value){
        return [i,j];
    }
    else{
        return 'not found';
    }
}

console.log(sumToCheck([1,2,3,9],8));
console.log(sumToCheck([1,2,4,4],8));
console.log(sumToCheck([1,2,4,4],10));
console.log(sumToCheck([1,8,2,4,4,37],45));

//This will only work if you are looking for a pair of numbers