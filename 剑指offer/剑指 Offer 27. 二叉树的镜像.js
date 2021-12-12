/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  if(root == null) return null
  // 把左子树保存一下
  let temp = root.left
  // root右子树指向原本的左子树
  root.left = mirrorTree(root.right)
  root.right = mirrorTree(temp)
  return root
};