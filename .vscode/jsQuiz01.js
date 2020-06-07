console.log(null == false);
console.log(null == true);
console.log(!Boolean(null) == true);
console.log(!Boolean(null) === true);

let obj = {
    "arr" : ["apple","banana","orange","pizza"]
}

console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));