/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = []
  if(root == null) return res
  let queue = []
  queue.push(root)
  let currNum = 1
  let nextNum = 0
  while(queue.length) {
      let temp = []
      // 因为结果每一层都存在单独的数组中，所以这里要遍历每一层
      while(currNum) {
          let curr = queue.shift()
          temp.push(curr.val)
          currNum--
          // 层序遍历，需要在处理当前节点时，把当前节点的左右节点都入队，这样才能记住当前节点的子节点是什么
          if(curr.left) {
              queue.push(curr.left)
              nextNum++ 
          }
          if(curr.right) {
              queue.push(curr.right)
              nextNum++ 
          }
      }
      
      if(currNum == 0) {
          currNum = nextNum
          nextNum = 0
          res.push(temp)
      }
  }
  return res
};