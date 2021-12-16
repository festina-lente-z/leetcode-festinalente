/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 求出最长公共子序列，然后再分别作差
var minDistance = function(word1, word2) {
  let l1 = word1.length, l2 = word2.length
  let dp = Array(l1+1).fill(0).map(()=>Array(l2+1).fill(0))
  for(let i=1; i<=l1; i++) {
    for(let j=1; j<=l2; j++) {
      // 注意这里！不要漏掉第一个字符
      if(word1[i-1]==word2[j-1]) {
        dp[i][j] = 1 + dp[i-1][j-1]
      } else {
        dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
      }
    }
  }
  return l1 + l2 - 2 * dp[l1][l2]
};
// @lc code=end

