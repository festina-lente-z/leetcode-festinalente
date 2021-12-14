/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = [], track = []
    const dfs = (start) => {
        // 数组是引用类型，要存数组的拷贝
        res.push([...track])
        if(start==nums.length) return
        for(let i=start; i<nums.length; i++){
            track.push(nums[i])
            dfs(i+1)
            track.pop()
        }
    }
    dfs(0)
    return res
};
// @lc code=end

