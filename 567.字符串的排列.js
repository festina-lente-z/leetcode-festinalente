/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

const res = require("express/lib/response");

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let map = new Map(), window = new Map()
  for(let str of s1) map.set(str, map.get(str)+1 || 1)

  let left = 0, right = 0, valid = 0
  while(right<s2.length) {
    let c = s2[right]
    right++
    if(map.has(c)){
      window.set(c, window.get(c)+1 || 1)
      if(map.get(c) == window.get(c)) valid++
    }
    while(right-left>=s1.length) {
      if(valid == map.size) return true
      let d = s2[left]
      left++
      if(map.has(d)){
        if(window.get(d)==map.get(d)) valid--
        window.set(d, window.get(d)-1)
      }
    }
  }
  return false
};
// @lc code=end

