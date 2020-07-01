/*
Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
convertHTML("Schindler's List") should return "Schindler&apos;s List".
convertHTML("<>") should return "&lt;&gt;".
convertHTML("abc") should return "abc".

*/

function convertHTML(str){
    let map = {
        '&' :'&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        '\'': '&apos;'
    };
    let newStr = '';
    str = str.split('');
    str.forEach(function(char){
        if(map[char] != undefined){
            newStr += map[char];
        }
        else{
            newStr += char;
        }
    })
    console.log(newStr);
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc");