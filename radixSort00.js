function radixSort(arr){
    let maxInteger = getMaxValue(arr);
    console.log('maxInteger: '+maxInteger);
    let iterations = String(maxInteger).length;
    console.log('iterations: '+iterations);

    for(let i = 0; i < iterations; i++){
        let bucket = [...Array(10)].map(() => []);
        for(let j = 0; j < arr.length; j++){
            //console.log('item handled: '+ arr[j]);
            let val = getValueAtPosition(arr[j],i+1);
            //console.log('val: '+val);
            bucket[val].push(arr[j]);
        }
        arr = String(bucket).split(',').filter((el) => Boolean(el));
        console.log(arr);
    }

    return arr;

    function getMaxValue(arr){
        let max = 0;
        for(let val of arr){
            if(val > max){
                max = val;
            }
        }
        return max;
    }

    function getValueAtPosition(val,pos){
        if(typeof String(val)[String(val).length - pos] != 'undefined'){
            return parseInt(String(val)[String(val).length - pos]);
        }
        return 0;
    }
}
let input = [4, 57, 1045, 7, 3, 933];
console.log('Input: '+input);
console.log('Output: '+radixSort(input));
