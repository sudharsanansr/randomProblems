console.log(null == 0); // Is the key!
console.log((null > 0) + (null < 0) + (null == 0) + (null >= 0) + (null <= 0));
console.log(false + false + false +true + true);

console.log(function(){
    return 'test';
}());

var text = 'abc';

if(text == (function(){
    return 'text';
})()){
    console.log('passed');
}
else{
    console.log('failed');
}