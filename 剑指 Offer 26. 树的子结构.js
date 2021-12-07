/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  let res = false
  // 如果A或B有一个是空树，就返回false
  if(A == null || B == null) return res
  if(A.val == B.val) {
      res = build(A, B)
  }
  // 这里先判断res是因为会存在值相同的节点
  // 如果值相同的节点不存在相似子树或者节点不同则继续遍历左子树和右子树，这两边有一边找到就行，所以中间是||连接
  if(!res) {
      res =  isSubStructure(A.left, B) || isSubStructure(A.right, B)
  }
  return res
};

var build = function(A, B) {
  // B==null说明遍历完B，节点仍相等，这种情况就说明存在子树，因此返回true
  if(B == null) return true
  if(A == null) return false
  if(A.val != B.val) return false
  // 返回结果用&&连接是因为必须要求
  return build(A.left, B.left) && build(A.right, B.right)
}