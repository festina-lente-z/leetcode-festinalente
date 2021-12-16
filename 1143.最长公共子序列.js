/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let l1 = text1.length, l2 = text2.length
  let dp = Array(l1+1).fill(0).map(()=>Array(l2+1).fill(0))
  // 为什么可以取等号
  for(let i=1; i<=l1; i++) {
    for(let j=1; j<=l2; j++) {
      if(text1[i-1]==text2[j-1]){
        dp[i][j] = 1 + dp[i-1][j-1]
      } else {
        dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
      }
    }
  }
  return dp[l1][l2]
};
// @lc code=end

