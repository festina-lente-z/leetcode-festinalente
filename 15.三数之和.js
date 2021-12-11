/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// nSum是递归问题
var threeSum = function(nums) {
  if(nums.length<3) return []
  nums.sort((a, b) => a - b)
  let res = []
  for(let i=0; i<nums.length; i++){
    let ans = twoSum(i+1, nums, 0-nums[i])
    for(let a of ans){
      res.push([nums[i],...a])
    }
    // 寻找下一个不重复的首位数，可以用while解决（for循环中）
    while(i<nums.length-1 && nums[i] == nums[i+1]) i++
  }
  return res
};
var twoSum = function(start, nums, target) {
  let res = []
  let lo = start, hi = nums.length - 1
  while(lo<hi) {
    let left = nums[lo], right = nums[hi]
    let sum = left + right
    if(sum < target) {
      while(lo<hi && nums[lo]==left) lo++
    }
    else if(sum > target) {
      while(lo<hi && nums[hi]==right) hi--
    }
    else {
      res.push([left,right])
      while(lo<hi && nums[lo]==left) lo++
      while(lo<hi && nums[hi]==right) hi--
    }
  }
  return res
}
// @lc code=end

