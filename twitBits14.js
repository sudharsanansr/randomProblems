let i;

for(i = 0; i < 6; i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}

for(let j = 0; j < 6; j++){
    setTimeout(function(){
        console.log(j);
    },1000);
}