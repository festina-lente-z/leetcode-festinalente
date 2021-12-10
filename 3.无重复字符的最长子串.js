/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
// 注意子串和子序列不同，子串要求连续且有序，子序列包含同种字符即可
var lengthOfLongestSubstring = function(s) {
  // map用来存储当前无重复字符的最长子串
  let map = new Map()
  let left = 0, right = 0, maxSize = 0
  // 先移动右指针
  while(right<s.length){
    let char = s[right]
    right++
    if(map.has(char)) {
      // 如果map里面有char，表明开始出现重复值
      // 我们要做的是找到这个重复值的位置，并且把left移动到这个重复值下标的下一个
      // 要时刻保证窗口中的元素不重复
      // 移动左指针的同时，要把移出窗口的值从map中删除
      while(char != s[left]) {
        if(map.has(s[left])) map.delete(s[left])
        left++
      }
      if(right-left>0) left++
    } else {
      map.set(char,1)
    }
    // maxSize保存的是最大无重复子串的长度
    maxSize = maxSize > map.size ? maxSize : map.size
  }
  return maxSize
};
// @lc code=end

