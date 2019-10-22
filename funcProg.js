var arr1 = [1,2,3]
console.log(arr1);

// var arr2 = [];
// for(var i = 0; i < arr1.length; i++){
//     arr2.push(arr1[i] * 2);
// }
// console.log(arr2);

function mapForEach(arr,fn){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;
}

var arr2 = mapForEach(arr1,function(item){
    return item * 2;
})
console.log(arr2);

var arr3 = mapForEach(arr1,function(item){
    return item > 2;
})
console.log(arr3);


/*---------------------------------------------------*/


var checkPastLimit = function(limiter,item){
    return item > limiter;
}

var arr4 = mapForEach(arr1,checkPastLimit.bind(this,2));
console.log(arr4);

var checkPastLimitSimplified = function(limiter){ //higher order function that has a bind called on it.
    return function(limiter,item){
        return item > limiter;
    }.bind(this,limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(3));
console.log(arr5);

//here in line #50 "_" refers to the underscore.js library and its function
//to view the results, open the page in live web server
var arr6 = _.map(arr1,function(item){
    return item * 4;
});
console.log(arr6);

var arr7 = _.filter([1,2,3,4,5,6,7,8,9],function(item){
    return item % 2 === 0;
})
console.log(arr7);

var arr = [4,55,56];
var arr1 = arr.map(function(a){
    return (a*2);
})
console.log(arr);
console.log(arr1);
