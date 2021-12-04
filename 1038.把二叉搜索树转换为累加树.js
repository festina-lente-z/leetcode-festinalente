/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 把二叉搜索树转换为累加树
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  // BST中序遍历结果有序
  // 降序：先遍历右子树
  let sum = 0
  const inOrder = (root) => {
    if(!root) return null
    inOrder(root.right)
    sum += root.val
    root.val = sum
    inOrder(root.left)
  }
  inOrder(root)
  return root
};
// @lc code=end

