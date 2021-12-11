/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let maxNum = nums[0], res = [], queue = []
  let left = 0, right = 0
  while(right<nums.length){
    let c = nums[right]
    right++
    let len = queue.length - 1
    while(len>=0 && queue[len]<c){
      queue.pop()
      len--
    }
    queue.push(c)
    if(right-left==k) {
      res.push(queue[0])
      left++ 
    }
  }
  return res
};
// @lc code=end

