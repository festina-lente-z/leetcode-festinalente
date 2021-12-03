/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  while(k) {
    const MIN = Math.min(...nums)
    const INDEX = nums.indexOf(MIN)
    nums[INDEX] = -MIN
    k--
  }
  return nums.reduce((prev, curr) => prev + curr)
};
// @lc code=end

