/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let max=1, temp=1
  for(let i=1; i<s.length; i++){
    // 遍历下标从1开始
    if(s[i] == s[i-1]){
      temp++
      max = Math.max(max, temp)
    } else {
      temp=1
    }
  }
  return max
};
// @lc code=end

