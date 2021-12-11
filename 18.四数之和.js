/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if(nums.length<4) return []
  nums.sort((a, b) => a - b)
  let res = []
  for(let i=0; i<nums.length; i++) {
    let ans = threeSum(nums, i+1, target-nums[i])
    for(let a of ans) {
      res.push([nums[i],...a])
    }
    while(i<nums.length-1 && nums[i]==nums[i+1]) i++ 
  }
  return res
};
const threeSum = (nums, start, target) => {
  let res = []
  for(let i=start; i<nums.length; i++) {
    let ans = twoSum(nums, i+1, target-nums[i])
    for(let a of ans) {
      res.push([nums[i],...a])
    }
    while(i<nums.length-1 && nums[i]==nums[i+1]) i++ 
  }
  return res
}
const twoSum = (nums, start, target) => {
  let lo = start, hi = nums.length - 1, res = []
  while(lo<hi){
    let left = nums[lo], right = nums[hi]
    let sum = left + right
    if(sum<target) {
      // 寻找下一个不重复值
      while(lo<hi && nums[lo]==left) lo++
    }
    else if(sum>target) {
      while(lo<hi && nums[hi]==right) hi--
    }
    else {
      res.push([left,right])
      while(lo<hi && nums[lo]==left) lo++
      while(lo<hi && nums[hi]==right) hi--
    }
  }
  return res
  // let map = new Map(), res = []
  // for(let i=start; i<nums.length; i++) {
  //   if(map.has(nums[i])) {
  //     let index = map.get(nums[i])
  //     res.push([nums[index], nums[i]])
  //     while(i<nums.length-1 && nums[i]==nums[i+1]) i++ 
  //   } else {
  //     // 存另一半的值，和当前值的下标
  //     map.set(target-nums[i], i)
  //   }
  // }
  // return res
}
// @lc code=end

