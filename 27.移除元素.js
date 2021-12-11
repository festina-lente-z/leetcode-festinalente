/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // 快慢指针
  // 如果 fast 遇到需要去除的元素，则直接跳过
  // 否则就告诉slow指针，并让slow前进一步
  let fast = 0, slow = 0
  while(fast<nums.length) {
    if(nums[fast] !== val) {
      nums[slow] = nums[fast]
      // slow的长度就是去掉val之后数组的长度
      slow++
    }
    fast++
  }
  return slow
};
// @lc code=end

