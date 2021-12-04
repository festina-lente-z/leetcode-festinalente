/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  // 首先就是想到把杂志里的字符存到map中
  const map = new Map()
  for(let m of magazine) {
    if(map.has(m)) {
      let count = map.get(m)
      map.set(m, count+1)
    } else {
      map.set(m, 1)
    }
  }
  for(let r of ransomNote) {
    if(map.has(r)) {
      let count = map.get(r)
      if(count > 1) {
        map.set(r, count-1)
      } else {
        map.delete(r)
      }
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

