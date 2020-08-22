function insertionSort(arr){
    //If given input is not an array, throw an error and return
    if(!Array.isArray(arr)){
        console.error('Given input is not an array!');
        return;
    }

    //If array length is 1, it's already sorted
    if(arr.length == 1){
        return arr;
    }

    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while((j >= 0) && arr[j] > current){ //Where the conditonal check happens
            arr[j+1] = arr[j]; //Shifting elements to the right
            j--;
        }
        arr[j+1] = current; //Where the shifting stops and the current element is put in it's place ;)
    }
    return arr;
}

let inputIS = [6,5,2,3,1,4];
console.log('Input: '+inputIS);
console.log('Output: '+insertionSort(inputIS));

/*
PSEUDO CODE

Get the current element, if the element is first element assume it's sorted.
Go to the next element
Check if element on the left from current is bigger 

*/

function selectionSort(arr){
    if(!Array.isArray(arr)){
        console.error('Given input is not an array!');
        return;
    }

    //If array length is 1, it's already sorted
    if(arr.length == 1){
        return arr;
    }

    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

let inputSS = [2,3,1,4];
console.log('Input: '+inputSS);
console.log('Output: '+selectionSort(inputSS));