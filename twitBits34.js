function printStars(num){
    let string = "*";
    let counter = 0;
    for(let i = num; i > 0; i--){
        console.log(string.padStart(i).concat(string.repeat(counter)));
        counter++;
    }
}

printStars(10);