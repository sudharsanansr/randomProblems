console.log(8);

setTimeout(function(){
    console.log(6)
},0);

console.log(3);

for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i)
    },0);
}

console.log(2);

var promise = Promise.resolve(9);

promise.then(function(value){
    console.log(value);
});