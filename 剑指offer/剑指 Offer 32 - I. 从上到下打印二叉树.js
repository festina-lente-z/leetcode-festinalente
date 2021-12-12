/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var levelOrder = function(root) {
  // 层序遍历
  // 队列
  let res = []
  if(root == null) return res
  let queue = []    
  queue.push(root)
  while(queue.length) {
      // 注意这里，定义一个变量存储出队节点，不要直接用root!死循环！
      let curr = queue.shift()
      res.push(curr.val)
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
  }
  return res
};
