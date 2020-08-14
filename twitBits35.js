function anagramTest(){
    console.log("Input 1: "+arguments[0]+", Input 2: "+arguments[1]);
    
    let isAnagram = true;
    let txt1 = arguments[0].toLowerCase().split('').sort();
    let txt2 = arguments[1].toLowerCase().split('').sort();

    if(txt1.length != txt2.length){
        isAnagram = false;
        return "is Anagram: "+isAnagram;
    }

    for(let i = 0; i < txt1.length; i++){
        if(txt1[i] != txt2[i]){
            isAnagram = false;
            break;
        }
    }
    return "is Anagram: "+isAnagram;
}

console.log(anagramTest("KATE","TAKE"));
console.log(anagramTest("TIK","TOK"));
console.log(anagramTest("TOKEN","KENT"));