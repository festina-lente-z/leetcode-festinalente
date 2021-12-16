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
  let prev = nums[0], maxSum = nums[0]
  for(let i=1; i<nums.length; i++) {
    let curr = nums[i]
    if(prev > 0) curr = prev + nums[i]
    maxSum = Math.max(maxSum, curr)
    prev = curr
  }
  return maxSum
};
// @lc code=end

