let list = [[2,4,1,5,6,3],[3,2,1,6,5,4],[6,1,4,3,5,2]];
list.forEach((ls,index,list) => {
    if(list.length > 3){
        return;
    }
    if(index == 0){
        console.log('Before Sort : '+ ls);
        console.log('After Sort: '+selectionSort(ls));
    }
    else if(index == 1){
        console.log('Before Sort : '+ ls);
        console.log('After Sort: '+insertionSort(ls));
    }
    else{
        console.log('Before Sort : '+ ls);
        console.log('After Sort: '+bubbleSort(ls));
    }   
})

function selectionSort(list){
    for(let i = 0; i < list.length - 1; i++){
        let min = list[i];
        for(let j = i+1; j < list.length; j++){
            if(list[j] < min){
                min = j;
            }
        }
        let temp = list[i];
        list[i] = list[min];
        list[min] = temp;
    }
    return list;
}

function insertionSort(list){
    for(let i = 0; i < list.length; i++){
        let current = list[i];
        let j = i - 1;
        while((j >= 0) && (list[j] > current)){
            list[j+1] = list[j];
            j--;
        }
        list[j+1] = current;
    }
    return list;
}

function bubbleSort(list){
    let size  = list.length;
    while(size > 0){
        for(let i = 0; i < size; i++){
            if(list[i] > list[i+1]){
                let temp = list[i+1];
                list[i+1] = list[i];
                list[i] = temp;
            }
        }
        size--;
    }
    return list;
}

//Practise