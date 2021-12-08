/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  // BST中序遍历结果有序
  // 先遍历右子树
  let rank = 0
  let res = 0
  const build = (root) => {
      if(root == null) return null
      build(root.right)
      rank++
      if(rank == k) res = root.val
      build(root.left)
  }
  build(root)
  return res
};