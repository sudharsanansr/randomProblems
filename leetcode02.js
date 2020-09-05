/**
 * @param {string} s
 * @return {number}
*/

/*
var lengthOfLongestSubstring = function(s) {
    
    if(s.length == 0){
        return 0;
    }

    let result = [];
    let str = ''
    for(let i = 0; i < s.length; i++){
        if(str.indexOf(s[i]) > -1){
            result.push(str.length);
            str = '';
            if(s[i-1] != s[i]){
                str += s[i-1];
            }
            str += s[i];
        }else{
            str += s[i];
        }
        
        if(i == s.length - 1){
            result.push(str.length);
        }
    }
    console.log(result.sort((a,b) => a - b)[result.length - 1]);
};

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("dvdf");
lengthOfLongestSubstring("anviaj");

*/

let lengthOfLongestSubstring2 = function(s){
    if(s.length <= 1){
        return s.length;
    }

    let len = s.length;
    let pointer = 0;
    let result = [];
    while(pointer < len){
        let str = '';
        for(let i = pointer; i < len; i++){
            if(str.indexOf(s[i]) > -1){
                result.push(str);
                str = '';
                str += s[i];
            }else{
                str += s[i];
            }
            
            if(i == s.length - 1){
                result.push(str);
            }
        }
        pointer++;
    }
    console.log(result);
    //console.log(result.sort((a,b) => a - b)[result.length - 1]);
}

lengthOfLongestSubstring2("abcabcbb");
lengthOfLongestSubstring2("bbbbb");
lengthOfLongestSubstring2("pwwkew");
lengthOfLongestSubstring2("dvdf");
lengthOfLongestSubstring2("anviaj");