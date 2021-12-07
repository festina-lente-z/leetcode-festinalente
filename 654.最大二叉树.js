/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  // 判断边界，如果剩下的数组为空，则返回null
  if(nums.length == 0) return null
  // 找到数组中的最大值
  let maxNum = Math.max(...nums)
  // 找到最大值所在位置
  let index = nums.indexOf(maxNum)
  // 创建当前节点
  const root = new TreeNode(maxNum)
  // 既然是构建二叉树，不仅要考虑根节点（当前节点）还要考虑左右子树的情况
  root.left = constructMaximumBinaryTree(nums.slice(0, index))
  root.right = constructMaximumBinaryTree(nums.slice(index+1, nums.length))
  return root
};
// @lc code=end

