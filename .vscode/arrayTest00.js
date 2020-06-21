let arr = [];
function range(a,b){
    for(a = a; a <= b; a++){
        arr[b] = b;
        if(a == 0){
            break;
        }
    }
    return arr;
}
range(0,8);
//console.log(range(0,8));

arr.forEach(function(item){
    console.log(item);
})