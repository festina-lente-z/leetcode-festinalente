/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = [], track = []
  // 排序
  nums.sort((a, b) => a-b)
  const dfs = (start) => {
    res.push([...track])
    if(start==nums.length) return
    let temp = []
    // 画递归树，每层的数字不同
    for(let i=start; i<nums.length; i++) {
      if(temp.indexOf(nums[i])==-1){
        temp.push(nums[i])
        track.push(nums[i])
        dfs(i+1)
        track.pop()
      }
    }
  }
  dfs(0)
  return res
};
// @lc code=end

