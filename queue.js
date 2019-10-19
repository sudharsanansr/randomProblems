let Queue = function(){
    this.count = 0;
    this.collection = [];

    this.enqueue = function(element){
        this.collection[this.count] = element;
        this.count++;
    }

    this.dequeue = function(){
        this.count--;
        return this.collection.shift();
    }

    this.size = function(){
        return this.count;
    }

    this.viewFirst = function(){
        if(this.collection[0]){
            return this.collection[0];
        }
        return undefined;
    }

    this.viewLast = function(){
        if(this.collection[this.count - 1]){
            return this.collection[this.count - 1];
        }
        return undefined;
    }

    this.isEmpty = function(){
        return (this.count === 0);
    }
}

let myQueue = new Queue();

console.log(myQueue.isEmpty());
myQueue.enqueue(1);
myQueue.enqueue(2);
console.log(myQueue.isEmpty());
console.log(myQueue.viewFirst());
console.log(myQueue.viewLast());
myQueue.dequeue();
myQueue.enqueue(3);
console.log(myQueue.viewFirst());
console.log(myQueue.viewLast());
console.log(myQueue);
console.log(myQueue.size());
