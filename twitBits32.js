function printStarsMirror(num){
    if(num % 2 == 0){
        return;
    }
    else{
        let median = (Math.ceil(num / 2));
        let tempArray = [];
        let count = 0;
        for(let i = median; i > 0; i--){
            count++;
            if(i == median){
                tempArray.push('*'.repeat(count));
            }
            else{
                tempArray.unshift('*'.repeat(count).split('').join(' '));
                tempArray.push('*'.repeat(count).split('').join(' '));
            }
        }
        console.log(tempArray.join('\n'));
    }
}

printStarsMirror(17);