/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * 1. 把括号存在map中
 * 2. 创建栈进行括号匹配
 */
var isValid = function(s) {
  let stack = [], map = new Map()
    map.set(')','(')
    map.set('}','{')
    map.set(']','[')
    stack.push(s[0])
    for(let i=1; i<s.length; i++) {
        if(map.has(s[i])) {
            let cur = map.get(s[i])
            let len = stack.length
            if(cur == stack[len-1]) stack.pop()
            else return false
        }
        else stack.push(s[i])
    }
    if(stack.length) return false
    else return true  
};
// @lc code=end

