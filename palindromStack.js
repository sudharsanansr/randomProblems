//Finding whether the give word is a stack or not using Stack implementation

let word = "racecar";
//let word = "test";
let rword = "";
let stack = [];

for(let i = 0; i < word.length; i++){
    stack.push(word[i]);
}

console.log(stack);

for(let j = 0; j < word.length; j++){
    rword += stack.pop();
}

console.log(rword);

if(word === rword){
    console.log("Given word '"+ word +"' is a palindrome!");
}
else{
    console.log("Given word '"+ word +"' is NOT a palindrome!!")
}
