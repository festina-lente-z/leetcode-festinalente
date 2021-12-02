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
  let max = Math.max(...score)
  const arr = new Array(max + 1).fill(-1)
  const res = new Array(score.length)
  score.forEach((value, index) => arr[value] = index)
  let rank = 1
  while(max >= 0) {
    if(arr[max] >= 0) {
      res[arr[max]] = rank < 4 ? medal[rank-1] : String(rank)
      rank++
    }
    max--
  }
  return res
};
// @lc code=end

