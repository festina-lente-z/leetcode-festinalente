/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 不理解可以先画一下递归树，从递归树中可以看到每个节点的子树层都应该是不同的值
// 深度优先的情况，每个节点的坐标值都应该不同（保证数组中的数字只出现一次）
var combinationSum2 = function(candidates, target) {
  let res = [], track = [], sum = 0
  // 要先排序
  candidates.sort((a, b) => a-b)
  const dfs = (start) => {
    if(sum == target) {
      res.push([...track])
      return
    }
    if(start==candidates.length || sum>target) return
    // 保证每个分支的每一层无重复值
    let temp = []
    for(let i=start; i<candidates.length; i++) {
      if(temp.indexOf(candidates[i]) == -1){
        temp.push(candidates[i])
        track.push(candidates[i])
        sum += candidates[i]
        dfs(i+1)
        const ans = track.pop()
        sum -= ans  
      }
    }
  }
  dfs(0)
  return res
};
// @lc code=end

