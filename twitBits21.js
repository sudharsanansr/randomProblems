//Fibonacci using Memoization
let cache = {};

function fibonacci (n) {
    if(typeof cache[n] != 'undefined'){
        return cache[n];
    }
    else{
        if(n == 1 || n == 2){
            return 1;
        }
        else{
            cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
            return cache[n];
        }
    }
}

for(let i = 1; i < 1200; i++){
    console.log(i + ' :: ' + fibonacci(i));
}