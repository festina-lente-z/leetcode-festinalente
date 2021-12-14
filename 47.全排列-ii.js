/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 递归树每个节点子树层不要有重复值
// index负责存储走过的路径
var permuteUnique = function(nums) {
  let res = [], track = [], index = []
  const dfs = () => {
    if(track.length == nums.length) {
      res.push([...track])
      return
    }
    let temp = []
    for(let i=0; i<nums.length; i++) {
      if(temp.indexOf(nums[i])==-1 && index.indexOf(i)==-1) {
        temp.push(nums[i])
        track.push(nums[i])
        index.push(i)
        dfs()
        track.pop()
        index.pop()
      }
    }
  }
  dfs()
  return res
};
// @lc code=end

