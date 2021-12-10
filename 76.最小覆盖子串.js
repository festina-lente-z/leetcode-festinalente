/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let tMap = new Map(), sMap = new Map()
  for(let i=0; i<t.length; i++) {
    tMap.set(t[i], tMap.get(t[i])+1 || 1)
  }
  // len：最小子串长度，需要是一个比s.length大的数
  let left = 0, right = 0, valid = 0, len = s.length+2, start = 0
  while(right<s.length) {
    // char是将移入窗口的字符
    let char = s[right]
    // 右移窗口
    right++
    // 进行窗口内数据的一系列更新
    if(tMap.has(char)) {
      sMap.set(char, sMap.get(char)+1 || 1)
      if(sMap.get(char) == tMap.get(char)) valid++
    }
    // 判断左侧窗口是否要收缩
    while(valid==tMap.size) {
      // 在这里更新最小覆盖子串
      //所以哪怕之后窗口继续滑动，到结尾，都可以通过保存的索引记录最小覆盖子串
      if(right-left<len){
        start = left
        len = right - left
      }
      let d = s[left]
      left++
      if(tMap.get(d)) {
        if(sMap.get(d) == tMap.get(d)) valid--
        sMap.set(d, sMap.get(d)-1)
      }
    }
  }
  // 返回最小覆盖子串
  return len == s.length+2 ? "" : s.slice(start, start+len)
};
// @lc code=end

