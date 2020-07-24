var arr = ['apple', 'banana', 'orange', 'apple', 'kiwi', 'banana'];
console.log(arr.filter((value,index) => {
    //console.log('index :: '+index+' value :: '+value)
    console.log('arr.indexOf(value) :: '+arr.indexOf(value));
    console.log('index :: '+index);
    return arr.indexOf(value) === index;
}));