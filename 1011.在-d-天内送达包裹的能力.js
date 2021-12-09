/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// 运载能力是二分搜索的范围
var shipWithinDays = function(weights, days) {
  // 船的最小载重应该是货物中最 大 值
  let left = Math.max(...weights), right = weights.reduce((pre,cur)=>pre+cur)
  while(left<=right) {
      let mid = left + Math.floor((right-left)/2)
      if(build(weights,mid) == days) right = mid - 1
      // 实际天数比输入天数小时，说明运载能力过大，此时应该找运载能力小的那一半
      else if(build(weights,mid) < days) right = mid - 1
      else if(build(weights,mid) > days) left = mid + 1
  }
  return left
};
// x为运载能力
var build = (weights, x) => {
  // 考虑到最后一组，temp>=0，但是也结束了
  // 这种情况count没计数，所以就从最开始就是1
  let sum = 0, count = 0
  for(let i=0; i<weights.length; i++) {
      sum += weights[i]
      if(sum == x) {
          count++
          sum = 0
      }
      else if(sum > x) {
          count++
          sum = weights[i]
      }
      if(i == weights.length-1 && sum > 0) count++
  }
  return count
}
// @lc code=end

