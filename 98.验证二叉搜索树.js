/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  // 验证BST，需要保证节点A的左子树的点都小于A.val，右子树的点都大于A.val
  // 构造辅助函数，传入范围
  const subIsValidBST = (root, minNode, maxNode) => {
    if(!root) return true
    // 注意要有=，因为BST的节点值不相同
    if(minNode && root.val<=minNode.val) return false
    if(maxNode && root.val>=maxNode.val) return false
    return subIsValidBST(root.left, minNode, root) && subIsValidBST(root.right, root, maxNode)
  }
  return subIsValidBST(root, null, null)
};
// @lc code=end

