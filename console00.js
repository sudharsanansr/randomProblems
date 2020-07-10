console.time('forloop');
for(let i = 0; i < 5000; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}
console.timeEnd('forloop')

//Above methods can be used for performance testing!