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
  nums.sort((a, b) => a-b)
  let index = 0, res = 0
  while(nums[index]<0 && k>0){
    nums[index] = -nums[index]
    index++
    k--
  }
  let min = nums[0]
  for(let value of nums) {
    res += value
    if(value < min) min = value
  }
  if(k!=0 && k%2!=0) {
    res = res - 2 * min
  }
  return res
};
// @lc code=end

