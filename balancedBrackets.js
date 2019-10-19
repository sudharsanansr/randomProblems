/*
https://www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
*/

let txt = "{(([])[])[]}[]";
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


let arr = [];
let map = {
    "{" : "}",
    "[" : "]",
    "(" : ")"
};

let flag = true;

for(let i = 0; i < txt.length; i++){
    if((txt[i].indexOf("[") > -1) || (txt[i].indexOf("(") > -1) || (txt[i].indexOf("{") > -1)){
        arr.push(txt[i]);
    }
    else{
        let last = arr.pop();
        console.log(last+" "+map[last]);
        if((txt[i] != map[last])){
            flag = false;
            break;
        }
    }
}
console.log(flag);
