const arr = [10,12,15,16];

for(var i = 0; i < arr.length; i++){
    setTimeout(function(){
        console.log("Index "+i+" is of value "+arr[i]);
    }, 2000);
}