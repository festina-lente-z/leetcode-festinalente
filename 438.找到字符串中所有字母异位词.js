/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 何时移动left指针是关键
// 窗口的长度始终是p的长度
var findAnagrams = function(s, p) {
  let map = new Map()
  let window = new Map()
  for(let i=0; i<p.length; i++) {
    map.set(p[i], map.get(p[i])+1 || 1)
  }
  let res = []
  let left = 0, right = 0, valid = 0
  while(right<s.length) {
    let char = s[right]
    right++
    if(map.has(char)){
      window.set(char, window.get(char)+1 || 1)
      // 如果两边数量正好相同，则valid++
      if(map.get(char) == window.get(char)) valid++
    }
    while(right-left>=p.length) {
      if(valid == map.size) res.push(left)
      let d = s[left]
      left++
      if(map.has(d)) {
        if(window.get(d) == map.get(d)) valid--
        window.set(d,window.get(d)-1)
      }
    }
  }
  return res
};
// @lc code=end

