/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 注意js除法要额外取整
  let left = 0, right = nums.length - 1

  while(right>=left) {
    let mid = left + Math.floor((right - left) / 2)
    if(nums[mid] == target) return mid
    else if (nums[mid] < target) left = mid + 1
    else if (nums[mid] > target) right = mid - 1
  }
  return -1
};
// @lc code=end

