/*
 * @lc app=leetcode.cn id=712 lang=javascript
 *
 * [712] 两个字符串的最小ASCII删除和
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
// str.charCodeAt()求字符ascii码
var minimumDeleteSum = function(s1, s2) {
  let l1 = s1.length, l2 = s2.length
  let dp = Array(l1+1).fill(0).map(()=>Array(l2+1).fill(0))
  // 为什么要这么写？
  //当s2为空字符串时，需要删掉s1所有字符
  for(let i=1; i<=l1; i++) {
    dp[i][0] = dp[i-1][0] + s1.charCodeAt(i-1)
  }
  //当s1为空字符串时，需要删掉s2所有字符
  for(let j=1; j<=l2; j++) {
    dp[0][j] = dp[0][j-1] + s2.charCodeAt(j-1)
  }
  for(let i=1; i<=l1; i++) {
    for(let j=1; j<=l2; j++) {
      if(s1[i-1]==s2[j-1]) {
        dp[i][j] = dp[i-1][j-1]
      } else {
        const asc1 = s1.charCodeAt(i-1) + dp[i-1][j]
        const asc2 = s2.charCodeAt(j-1) + dp[i][j-1]
        dp[i][j] = Math.min(asc1, asc2)
      }
    }
  }
  return dp[l1][l2]
};
// @lc code=end

