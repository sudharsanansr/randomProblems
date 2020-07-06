function foo(x){    
    var y = x + 3;
    
    function bar(z){
        console.log(x,y,z);
    }

    bar(y * 2);
}

foo(4);