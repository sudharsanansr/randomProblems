var arr = [];
for(var i = 0; i < 10; i++){
    setTimeout(function(){
        arr[i] = (i+1);
    },1+i);
}
setTimeout(function(){
    for(var i = 0; i <10; i++){
        console.log(arr[i]);
    }
},15);