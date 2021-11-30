/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return build(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1)
};
var build = function(preorder, preS, preE, inorder, inS, inE) {
  // 注意不要越界
  if(preS > preE) return null
  const rootVal = preorder[preS]
  let index = inorder.indexOf(rootVal)
  const root = new TreeNode(rootVal)
  // 左子树的节点数 
  let leftSize = index - inS
  root.left = build(preorder, preS+1, preS+leftSize, inorder, inS, index-1)
  root.right = build(preorder, preS+leftSize+1, preE, inorder, index+1, inE)
  return root
}
// @lc code=end

