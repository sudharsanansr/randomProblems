/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

Passed
translatePigLatin("california") should return "aliforniacay".
Passed
translatePigLatin("paragraphs") should return "aragraphspay".
Passed
translatePigLatin("glove") should return "oveglay".
Passed
translatePigLatin("algorithm") should return "algorithmway".
Passed
translatePigLatin("eight") should return "eightway".
Passed
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
Passed
Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
*/

function translatePigLatin(str) {
  let firstVowel = str.match(/([aeiou])/i);
  if(firstVowel){
    if(firstVowel.index === 0){
      return str+'way';
    }
    return str.replace(str.substring(0,firstVowel.index),'').concat(str.substring(0,firstVowel.index)+'ay');
  }
  return str+'ay';
}

translatePigLatin("consonant");
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));