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
  let level = 1
  while(queue.length) { 
      let temp = []
      while(currNum) {
          let curr = queue.shift()
          // “之”字打印，多一步判断，如果是偶数行就从前往后插入，这样结果就是反过来的
          if(level % 2 == 0) temp.unshift(curr.val)
          else temp.push(curr.val)
          currNum--
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
          res.push(temp)
          currNum = nextNum
          nextNum = 0
          level++
      }
      
  }
  return res
};