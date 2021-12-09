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
  let left = 0, right = nums.length - 1

  while(left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if(nums[mid] == target) {
      // 因为题目是要一个区间，在传统二分查找的基础上，分别向左和向右查找
      let countLeft = -1
      let countRight = -1
      // 从mid开始，防止边界溢出
      for(let i=mid; i>=0; i--){
        if(nums[i] == target) countLeft++
        else break
      }
      for(let i=mid; i<nums.length; i++){
        if(nums[i] == target) countRight++
        else break
      }
      return [mid-countLeft, mid+countRight]
    }
    else if(nums[mid] < target) left = mid + 1
    else if(nums[mid] > target) right = mid - 1
  }
  return [-1,-1]
};
// @lc code=end

