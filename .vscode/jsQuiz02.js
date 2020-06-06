function checkAge(age){
    if(age < 18){
        const msg = 'Sorry, you are too young.';
    }
    else{
        const msg = 'Yay! You are old enough.';
    }
    return msg;
}
console.log(checkAge(16)); //because const is block scoped! will not be access outside from {}