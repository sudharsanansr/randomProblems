/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/

function convertToRoman(num) {

    let strNum = String(num);
    let strArray = [...strNum].reverse();
    let romanString = [];

    for(let i = 0; i < strArray.length; i++){
        romanString.unshift(mapData(strArray[i] * Math.pow(10,i)));
    }
    romanString = romanString.filter(item => Boolean(item));

    console.log(romanString.join().replace(/\W/g,''));
    return romanString.join().replace(/\W/g,'');

    function mapData(input){
        let map = {
            1 : 'I',
            2 : 'II',
            3 : 'III',
            4 : 'IV',
            5 : 'V',
            6 : 'VI',
            7 : 'VII',
            8 : 'VIII',
            9 : 'IX',
            10 : 'X',
            20 : 'XX',
            30 : 'XXX',
            40 : 'XL',
            50 : 'L',
            60 : 'LX',
            70 : 'LXX',
            80 : 'LXXX',
            90 : 'XC',
            100 : 'C',
            200 : 'CC',
            300 : 'CCC',
            400 : 'CD',
            500 : 'D',
            600 : 'DC',
            700 : 'DCC',
            800 : 'DCCC',
            900 : 'CM',
            1000 : 'M',
            2000 : 'MM',
            3000 : 'MMM',
        }
        return map[input];
    }
}

convertToRoman(36); //should return "XXXVI"
convertToRoman(2); //should return "II".
convertToRoman(3); //should return "III".
convertToRoman(4); //should return "IV".
convertToRoman(5); //should return "V".
convertToRoman(9); //should return "IX".
convertToRoman(12); //should return "XII".
convertToRoman(16); //should return "XVI".
convertToRoman(29); //should return "XXIX".
convertToRoman(44); //should return "XLIV".
convertToRoman(45); //should return "XLV"
convertToRoman(68); //should return "LXVIII"
convertToRoman(83); //should return "LXXXIII"
convertToRoman(97); //should return "XCVII"
convertToRoman(99); //should return "XCIX"
convertToRoman(400); //should return "CD"
convertToRoman(500); //should return "D"
convertToRoman(501); //should return "DI"
convertToRoman(649); //should return "DCXLIX"
convertToRoman(798); //should return "DCCXCVIII"
convertToRoman(891); //should return "DCCCXCI"
convertToRoman(1000); //should return "M"
convertToRoman(1004); //should return "MIV"
convertToRoman(1006); //should return "MVI"
convertToRoman(1023); //should return "MXXIII"
convertToRoman(2014); //should return "MMXIV"
convertToRoman(3999); //should return "MMMCMXCIX"

/*
https://www.freecodecamp.org/forum/t/16044

https://www.mathsisfun.com/roman-numerals.html
*/