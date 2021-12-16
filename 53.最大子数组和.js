/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 为什么不能用滑动窗口？因为里面有负值
// dp[i]以nums[i]为结尾的连续子数组最大和
var maxSubArray = function(nums) {
  let dp = Array(nums.length).fill(nums[0])
  for(let i=1; i<nums.length; i++) {
    if(dp[i-1]>0){
      dp[i] = dp[i-1] + nums[i]
    } else {
      dp[i] = nums[i]
    }
  }
  return Math.max(...dp)
};
// @lc code=end

