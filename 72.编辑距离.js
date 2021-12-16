/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let l1 = word1.length, l2 = word2.length
  let dp = Array(l1+1).fill(0).map(()=>Array(l2+1).fill(0))
  for(let i=1; i<=l1; i++) dp[i][0] = i
  for(let j=1; j<=l2; j++) dp[0][j] = j
  for(let i=1; i<=l1; i++) {
    for(let j=1; j<=l2; j++) {
      if(word1[i-1]==word2[j-1]){
        dp[i][j] = dp[i-1][j-1]
      } else {
        const insert = dp[i][j-1] + 1
        const del = dp[i-1][j] + 1
        const replace = dp[i-1][j-1] + 1
        dp[i][j] = Math.min(insert,del,replace)
      }
    }
  }
  return dp[l1][l2]
};
// @lc code=end

