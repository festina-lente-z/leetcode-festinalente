/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1
  let res = 0
  // 结束条件是left>right
  while(left<=right) {
    let mid = left + Math.floor((right-left)/2)
    if(nums[mid]==target) {
      res = mid
      break
    } 
    else if(nums[mid]<target) left = mid + 1
    else if(nums[mid]>target) right = mid - 1
  }
  return res || left
};
// @lc code=end

