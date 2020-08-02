let lists = [[4,5,2,7,8,9,3,6],[10,2,8,6,7,3],[7,5,4,3,2,6,1]];
lists.forEach((el,index) => {
    console.log('Before Sort: '+el);
    selectionSort(el);
});

function selectionSort(list){
    let size = list.length;
    for(let i = 0; i < size - 1; i++) {
        let minIndex = i;
        for(let j = i+1; j < size; j++) {
            if(list[j] < list[minIndex]){
                minIndex = j
            }
        }
        let temp = list[i];
        list[i] = list[minIndex];
        list[minIndex] = temp;
    }
    console.log('After Sort: '+list);
}