/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0, right = nums.length

  while(left<right) {
    let mid = left + Math.floor((right-left)/2)
    if(nums[mid] > target) right = mid
    else if(nums[mid] == target) right = mid
    else if(nums[mid] < target) left = mid + 1
  }
  if(nums[left] != target) return [-1,-1]
  let count = -1
  for(let i=left; i<nums.length; i++){
    if(nums[i] == target) count++
    else break
  }
  return [left, left+count]
};
// @lc code=end

