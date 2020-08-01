let list = ['atc4',371,806,456,1634];
list.forEach(num => isArmstrongNumber(num));

function isArmstrongNumber(number){
    if(isNaN(number)){
        console.log(number+' is not a valid input!');
        return;
    }
    else{
        let numString = String(number);
        let size = numString.length;
        let sum = 0;

        numString.split('').forEach(num => {
            sum += Math.pow(parseInt(num),size)
        });

        if(sum == number){
            console.log(number+' is a Armstrong number!');
        }
        else{
            console.log(number+' is not a Armstrong number!');
        }
    }
}