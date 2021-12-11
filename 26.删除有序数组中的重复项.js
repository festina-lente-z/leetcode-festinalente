/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 快慢指针
  // 把不同值前移，最后返回一个长度，后面的不用管
  let j = 0
  for(let i=0; i<nums.length; i++) {
    if(nums[j]<nums[i]) {
      nums[j+1] = nums[i]
      j++
    }
  }
  return j+1
};
// @lc code=end

