let littleStack = function(){
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function(element){
        this.storage[this.count] = element;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function(){

        if(this.count === 0){
            return undefined;
        }

        this.count--;
        let last = this.storage[this.count];
        delete this.storage[this.count];
        return last;
    }

    //returns the last element of the stack but will not change the stack
    this.peek = function(){
        return this.storage[this.count - 1];
    }

    //returns the size of the stack
    this.size = function(){
        return this.count;
    }
}

let myStack = new littleStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());
myStack.push("Testing");
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
