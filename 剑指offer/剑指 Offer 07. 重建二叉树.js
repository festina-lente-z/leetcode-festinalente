/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const l = preorder.length
  if(!l) return null
  let val = preorder[0]
  let index = inorder.indexOf(val)
  let root = new TreeNode(val)
  // 整道题可以参考654.构造最大二叉树这道题
  // 相同点都是找到左子树和右子树的区间
  root.left = buildTree(preorder.slice(1,index+1), inorder.slice(0,index))
  root.right = buildTree(preorder.slice(index+1,l), inorder.slice(index+1,l))
  return root   
};