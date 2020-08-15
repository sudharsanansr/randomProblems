let bs = function bubbleSort(arr){
    console.log('Bubble Sort: Before Sort: '+arr);
    let size = arr.length;
    while(size > 0){
        for(let i = 0; i < size; i++){
            if(arr[i+1] < arr[i]){
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
        }
        size--;
    }
    console.log('Bubble Sort: After Sort: '+ arr);
}

let is = function insertionSort(arr){
    console.log('Insertion Sort: Before Sort: '+arr);
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while((j >= 0) && (arr[j] > current)){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    console.log('Insertion Sort: After Sort: '+ arr);
}

let ss = function selectionSort(arr){
    console.log('Selection Sort: Before Sort: '+arr);
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
    console.log('Selection Sort: After Sort: '+ arr);
}


let ms = function mergeSort(arr){
    console.log('Merge Sort: Before Sort: '+arr);
    if(arr.length <= 1){
        return arr;
    }
    let midIndex = Math.floor(arr.length / 2);
    let left = arr.slice(0,midIndex);
    let right = arr.slice(midIndex);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex  = 0;

    while((leftIndex < left.length) && (rightIndex < right.length)){
        if(left[leftIndex] < right[rightIndex]){
            resultArray.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}



let list = [[4,5,2,7,8,9,3,6],[10,2,8,6,7,3],[7,5,4,3,2,6],[10, -1, 2, 5, 0, 6, 4, -5]];
let functions = [bs,is,ss,ms];

list.forEach((item,index) => {
    console.log(functions[index](item));
})