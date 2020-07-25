// Painting theif
// https://medium.com/dataseries/learning-dynamic-programming-with-a-popular-coding-interview-question-5a5c0170fa44

let nums = [3,5,6,2,1,8];
//1+3+5
//2+4+6
//1+4+6
//2+5
const maxSteal = (nums) => {
    //[3,5,6,2,1,8]
    //Base case 
    let dp = [];
    dp[0] = 0;
    dp[1] = nums[0];

    for(let i = 1; i < nums.length; i++){
        dp[i+1] = Math.max(dp[i],nums[i]+dp[i-1]);//dp[2]
    }

    return dp[nums.length];

}

console.log(maxSteal([3,5,6,2,1,8]));