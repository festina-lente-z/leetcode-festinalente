/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 从后往前遍历
  let j = nums.length-1
  for(let i=nums.length-1; i>=0; i--){
    if(nums[i]<nums[j]) {
      nums.splice(i+1, j-i-1)
      j = i
    }
    if(i==0) nums.splice(i,j-i)
  }
  return nums.length
};
// @lc code=end

