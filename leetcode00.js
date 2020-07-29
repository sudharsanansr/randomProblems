/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
    let newNums = nums.map((element) => {
        return target - element;
    });
    
    for(let i = 0; i < nums.length; i++){
        if((newNums.indexOf(nums[i]) > -1) && (nums.indexOf(newNums[i]) > -1)){
            if(i !== newNums.indexOf(nums[i])){
                return [newNums.indexOf(nums[i]),i].sort();
            }
        }
    }
};

console.log(twoSum([2, 7, 4, 11, 15],11));
console.log(twoSum([3, 2, 4],5));
console.log(twoSum([0, 4, 3, 0],0));
console.log(twoSum([3, 2, 4],6));