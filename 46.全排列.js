/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [], track = new Map()
  backtrack(nums, track, res)
  return res
};
// 路径：记录在track中
// 选择列表：nums中不存在于track的那些元素
// 结束条件：nums中的元素全都在track中出现
const backtrack = (nums, track, res) => {
  // 触发结束条件
  if(track.size == nums.length) {
    res.push([...track.keys()])
    return
  }
  for(let i=0; i<nums.length; i++) {
    // 排除不合法的选择
    if(!track.has(nums[i])){
      // 做选择
      track.set(nums[i],1)
      // 进入下一层决策树
      backtrack(nums, track, res)
      // 取消选择
      track.delete(nums[i])
    }
  }
}
// @lc code=end

