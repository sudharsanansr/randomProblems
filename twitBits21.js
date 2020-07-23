//Fibonacci using Memoization

function findnthfibonacci (n) {

    if(n == 1 || n == 2){
        return 1;
    }
    else{
        return findnthfibonacci(n - 1) + findnthfibonacci(n - 2);
    }
}

for(let i = 1; i < 21; i++){
    console.log(i + ' :: ' + findnthfibonacci(i));
}