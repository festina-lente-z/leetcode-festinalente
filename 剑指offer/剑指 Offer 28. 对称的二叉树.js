/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return build(root, root)
};
/**
 * 
 针对前序遍历定义一种对称的遍历算法，即先遍历父节点，再遍历它的右节点，最后遍历它的
 左子节点
 这题和26题有点像，反倒和27没什么关系
 */
var build = function(rootA, rootB) {
  // 如果遍历到最后正好A和B都遍历完了，则说明对称
  if(rootA == null && rootB == null) return true
  // 在上一个条件下，剩下的就是一个遍历完一个没遍历完，就是结构上不同，可能一长一短，所以不对称
  if(rootA ==  null || rootB == null) return false
  // 结构相同但是值不同，也不对称
  if(rootA.val != rootB.val) return false
  // 比较，中间&&是因为要求左右都对称才可以
  return build(rootA.left, rootB.right) && build(rootA.right, rootB.left)
}