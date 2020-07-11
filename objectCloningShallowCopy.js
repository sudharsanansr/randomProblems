//Method 1
var obj1 = {
    name : 'Sudharsanan Ravichandran',
    age : 29
}

var obj2 = {...obj1, age : 24, name: 'Mohan Raj Ravichandran'};

console.log(obj1);
console.log(obj2);

//Method 2

var obj3 = {
    name : 'XYZ',
    age : 10
}

var obj4 = {};

for(var keys in obj3){
    obj4[keys] = obj3[keys]
}

obj4.name = 'ABC';
obj4.age = 8;

console.log(obj3);
console.log(obj4);

//Method 3

var obj5 = {
    a : 'b',
    b : 'a'
}

var obj6 = JSON.parse(JSON.stringify(obj5));

obj6.a = 'c';
obj6.b = 'd';

console.log(obj5);
console.log(obj6);

//Method 4
const obj7 = { a: 1 };
const obj8 = Object.assign({}, {...obj7, a : 2});

console.log(obj7);
console.log(obj8);