/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [], track = []
  const dfs = (start) => {
    if(track.length == k){
      // 存track的浅拷贝
      res.push([...track])
      return
    }
    for(let i=start; i<=n; i++){
      track.push(i)
      dfs(i+1)
      track.pop(i)
    }
  }
  dfs(1)
  return res
};
// @lc code=end

