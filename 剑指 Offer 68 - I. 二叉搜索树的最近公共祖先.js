/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // 如果p，q在root两侧，则root为最近公共节点
  if (!root) {
      return null
  }
  while (root) {
    // p和q同时大于根节点，向右遍历，必须要同时才行
      if (root.val < q.val && root.val < p.val) {
          root = root.right
      }
      else if (root.val > q.val && root.val > p.val) {
          root = root.left
      }
      else {
          return root
      }
  }
};
// 注意：如果一个节点是叶子节点，另一个是根节点，则公共祖先是这个根节点