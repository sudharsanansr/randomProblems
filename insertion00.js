//let arr = [7,5,4,3,2,6];
let arr = [10,2,1,8,6,7,3];

for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    let j = i - 1;
    console.log('i: '+i+', j: '+j);
    while((j >= 0) && arr[j] > current){
        arr[j+1] = arr[j]; //10 moved to on place of 2 [10,10,1,8,6,7,3];
        j--;
    }
    arr[j+1] = current; //10 will be replaced by 2;
    console.log(arr);
}