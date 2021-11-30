/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return build(inorder, 0, inorder.length-1, postorder, 0, postorder.length-1)
};
var build = function(inorder, inS, inE, postorder, postS, postE) {
  if(postS > postE) return null
  const rootVal = postorder[postE]
  let index = inorder.indexOf(rootVal)
  const root = new TreeNode(rootVal)
  let leftSize = index - inS
  root.left = build(inorder, inS, index-1, postorder, postS, postS+leftSize-1)
  root.right = build(inorder, index+1, inE, postorder, postS+leftSize, postE-1)
  return root
}
// @lc code=end

