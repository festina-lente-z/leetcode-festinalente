/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
/**
 * 
 二分搜索
 吃香蕉所需要的事件是因变量，吃香蕉的速度是自变量
 吃香蕉的最小速度是每小时1根，最大速度是这几堆香蕉中最大数量
 构造吃香蕉所需时间的函数
 */
var minEatingSpeed = function(piles, h) {
  let left = 1, right = Math.max(...piles)
  while(left<=right) {
    let mid = left + Math.floor((right-left)/2)
    if(build(piles,mid)==h) right = mid - 1
    else if(build(piles,mid)>h) left = mid + 1
    else if(build(piles,mid)<h) right = mid - 1
  }
  return left
};

const build = (piles, k) => {
  let hours = 0
  for(let i=0; i<piles.length; i++) {
    hours += Math.ceil(piles[i]/k)
  }
  return hours
}
// @lc code=end

