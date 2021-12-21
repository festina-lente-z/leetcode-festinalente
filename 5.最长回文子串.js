/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 一个字符也是回文子串
  // 中心扩散法
  // 每一步是求以i为*中心*的最长回文子串
  // 考虑奇偶两种情况
  let res = ''
  const build = (left, right, s) => {
    let temp = ''
    while(left>=0 && right<s.length && s[left]==s[right]) {
        temp = s.slice(left,right+1)
        left--
        right++
    }
    return temp
  }
  for(let i=0; i<s.length; i++) {
    let substr1 = build(i,i,s)
    let substr2 = build(i,i+1,s)
    let ans = substr1.length > substr2.length ? substr1 : substr2
    res = res.length > ans.length ? res : ans
  }
  return res
};
// @lc code=end

