var x = 50;

function foo(){
    var x = 30;

    function bar(x){
        x = 20;
        y = 10
    }

    bar();
}

foo();
console.log(x+y);

//https://www.tutorialsteacher.com/javascript/javascript-variable#:~:text=It%20is%20Not%20Recommended%20to,anywhere%20in%20the%20web%20page.