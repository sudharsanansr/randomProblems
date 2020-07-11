function printStars(number){
    for(let i = 0; i < number; i++){
        console.log(Array(number).fill('*',(number - (i+1))).filter((x) => {
            return Boolean(x);
        }).join(" "));
    }
}

printStars(4);

console.log('//================================//');

function printStarsSource(number){
    for(let i = 0; i < number; i++){
        console.log(Array(number).fill('*',(number - (i+1))));
    }
}

printStarsSource(5);