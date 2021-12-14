/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = [], track = [], sum = 0
  const dfs = (start) => {
    if(sum == target) {
      res.push([...track])
      return
    }
    if(start==candidates.length || sum > target) return
    for(let i=start; i<candidates.length; i++){
      track.push(candidates[i])
      sum += candidates[i]
      dfs(i)
      let ans = track.pop()
      sum -= ans
    }
  }
  dfs(0)
  return res
};
// @lc code=end

