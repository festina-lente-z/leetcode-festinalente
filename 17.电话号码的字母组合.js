/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits.length==0) return []
  let ph = [['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],
  ['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']]
  let res = [], track = []
  const dfs = (start) => {
    if(track.length==digits.length){
      let ans = [...track]
      res.push(ans.join(''))
      return
    }
    if(start<0) return
    let row = parseInt(digits[start]) - 2
    for(let i=0; i<ph[row].length; i++){
      track.push(ph[row][i])
      start++
      dfs(start)
      start--
      track.pop()
    }
  }
  dfs(0)
  return res
};
// @lc code=end

