var foo = {
    bar : function(){ return this.baz; },
    baz : 1
};

console.log(foo.bar());

(function(){
    console.log(arguments[0]());
})(foo.bar);