/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  // 排序可以用sort
  const medal = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
  const map = new Map(), res = new Array(score.length)
  score.forEach((value, index) => map.set(value, index))
  score = score.sort((a, b) => b - a)
  score.forEach((value, index) => {
    res[map.get(value)] = index < 3 ? medal[index] : String(index+1)
  })
  return res
};
// @lc code=end

