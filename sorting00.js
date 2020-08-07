//Let's see how fast I can right sorting Algos

//BubbleSort 

function bubbleSort(list){
    console.log('Before sort: '+list);
    let size = list.length;
    while(size > 0){
        for(let i = 0; i < size; i++){
            if(list[i] > list[i+1]){
                let temp = list[i];
                list[i] = list[i+1];
                list[i+1] = temp;
            }
        }
        size--;
        console.log('list: '+list);
    }
    console.log('After sort: '+list);
}

bubbleSort([2,4,1,5,6,3]);

function insertionSort(list){
    console.log('Before sort: '+list);
    for(let i = 0; i < list.length; i++){
        let current = list[i];
        let j = i - 1;
        while((j >= 0) && list[j] > current){
            list[j+1] = list[j];
            j--;
        }
        list[j+1] = current;
        console.log('list: '+list);
    }
    console.log('After sort: '+list);
}

insertionSort([2,4,1,5,6,3]);

function selectionSort(list){
    console.log('Before sort: '+list);
    for(let i = 0; i < list.length - 1; i++){
        let min = list[i]
        for(let j = i+1; j < list.length; j++){
            if(list[j] < min){
                min = j
            }
        }
        let temp = list[i];
        list[i] = list[min];
        list[min] = temp;
        console.log('list: '+list);
    }
    console.log('After sort: '+list);
}

selectionSort([2,4,1,5,6,3]);