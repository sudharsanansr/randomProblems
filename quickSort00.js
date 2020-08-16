function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for(let val of arr.slice(0,arr.length - 1)){
        val < pivot ? left.push(val) : right.push(val);
    };

    return [...quickSort(left),pivot,...quickSort(right)];
}

const input = [4,3,1,2,6,5,-5,-10,100,499,700,65];
console.log(quickSort(input));
console.log(input);