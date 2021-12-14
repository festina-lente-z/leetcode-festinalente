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
  let res = [], track = []
  const dfs = (track) => {
    if(track.length==nums.length){
      res.push([...track])
      return
    }
    for(let i=0; i<nums.length; i++){
      if(track.indexOf(nums[i])==-1){
        track.push(nums[i])
        dfs(track)
        track.pop(nums[i])
      }
    }
  }
  // 参数是已经选的,不在已选中就是未选的
  dfs(track)
  return res
}
// @lc code=end

