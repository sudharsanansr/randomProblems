//https://www.youtube.com/watch?v=t2CEgPsws3U&t=1322s

let priorityQueue = function(){
    this.collection = [];
    this.count = 0;

    this.printQueue = function(){
        console.log(this.collection);
    }

    this.enqueue = function(element){
        if(this.count === 0){
            this.collection.push(element);
            this.count++;
        }
        else{
            let added = false; 
            for(let i = 0; i < this.collection.length; i++){
                if(element[1] < this.collection[i][1]){
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;      
                }
            }

            if(!added){
                this.collection.push(element);
            }
            this.count++;
        }
    }

    this.getCount = function(){
        return this.count;
    }

    this.viewFirst = function(){
        return this.collection[0];
    }

    this.viewLast = function(){
        return this.collection[this.collection.length - 1];
    }

    this.dequeue = function(){
        this.count--;
        return this.collection.shift();
    }
}

let pq = new priorityQueue();
pq.enqueue(["a",1]);
pq.enqueue(["b",2]);
pq.enqueue(["c",2]);
console.log(pq);
console.log(pq.viewLast());
console.log(pq.dequeue());
pq.enqueue(["A",0]);
console.log(pq);
pq.enqueue(["B",1]);
console.log(pq);
pq.enqueue(["D",2]);
console.log(pq);
pq.enqueue(["C",1]);
console.log(pq);
pq.enqueue(["a",0]);
console.log(pq);
