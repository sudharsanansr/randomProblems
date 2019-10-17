/*
https://www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
*/

let txt = "{{([])}}";
//let txt = '[{[)}]'
txt = txt.split("");

txt = txt.filter(function(t){
    if(t.indexOf("{") > -1){
        return t;
    }
    else if(t.indexOf("}") > -1){
        return t;
    }
    else if(t.indexOf("]") > -1){
        return t;
    }
    else if(t.indexOf("[") > -1){
        return t;
    }
    else if(t.indexOf("(") > -1){
        return t;
    }
    else if(t.indexOf(")") > -1){
        return t;
    }
})

console.log(txt);

let a = "[]";
let b = "{}";
let c = "()";
let flag = true;

for(let i = 0; i < (txt.length)/2; i++){  
    let j = (txt.length - (i+1));
    console.log("i = "+i+", j = "+j);
    let str = txt[i].concat(txt[j]).trim();
    if((str == a) || (str == b) || (str == c)){
        continue;
    }
    else{
        flag = false;
        break;
    }
    j--;
}

console.log(flag);
