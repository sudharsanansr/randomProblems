function greeting(){
    //return "Aye! Aye!";
    throw "Hello world!";
}

function sayHi(){
    try{
        const data = greeting();
        console.log("It worked!",data);
    }
    catch(err){
        console.log("Oh no an error!",err);
    }
}

sayHi();