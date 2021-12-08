/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  // 二叉搜索树（BST）性质：一个节点的左子树都小于该节点，右子树都大于该节点
  // BST中序遍历得到的结果是升序的
  // 中序遍历，找到第k个元素
  let res = 0
  // k=0的时候结束递归
  const inOrder = (root) => {
    if(!root) return null
    inOrder(root.left)
    k--
    if(k == 0) {
      res = root.val
      // 结束递归，直接return
      return 
    }
    inOrder(root.right)
    
  }
  inOrder(root)
  return res
};
// @lc code=end

