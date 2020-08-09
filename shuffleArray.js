let str = "Hello I Am Sudharsanan Ravichandran"
let list = str.split(' ');
console.log(list);
let cache = [];

while(list.length > cache.length){
    let index = Math.floor(Math.random() * (list.length));
    if(!cache.includes(index)){
        cache.push(index);
    }
}

let returnArray = [];

cache.forEach((el) => {
    returnArray.push(list[el]);
})

console.log(returnArray);