(function(){
    if(/* window.console && */console.log){ //Remove the commented part to work at browser level.
        var old = console.log;
        console.log = function(){
            Array.prototype.unshift.call(arguments, 'Data:');
            old.apply(this, arguments)
        }
    }  
})();

console.log("Alpha!");

//Overriding console.log method!