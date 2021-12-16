/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间复杂度 O(N^2)
var lengthOfLIS = function(nums) {
  let dp = Array(nums.length).fill(1)
  for(let i=0; i<nums.length; i++){
    for(let j=i;j>=0;j--){
      if(nums[i]>nums[j]){
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }
  return Math.max(...dp) 
};
// @lc code=end

