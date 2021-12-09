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
  
  return [left_bound(nums, target), right_bound(nums, target)]
};
const left_bound = (nums, target) => {
  let left = 0, right = nums.length

  while(left<right) {
    let mid = left + Math.floor((right-left)/2)
    if(target > nums[mid]) left = mid + 1
    else if(target == nums[mid]) right = mid
    else if(target < nums[mid]) right = mid
  }

  return nums[left] == target ? left : -1
}

const right_bound = (nums, target) => {
  let left = 0, right = nums.length

  while(left<right) {
    let mid = left + Math.floor((right-left)/2)
    if(target > nums[mid]) left = mid + 1
    else if(target == nums[mid]) left = mid + 1
    else if(target < nums[mid]) right = mid
  }
  // 因为右侧边界是开区间，取不到，所以要减掉1
  return nums[right-1] == target ? right-1 : -1
}
// @lc code=end

