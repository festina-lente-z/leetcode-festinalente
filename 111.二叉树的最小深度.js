/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
  if(root == null) return 0
  // root本身就是一层，初始化高度是1
  let queue = [], height = 1
  queue.push(root)
  while(queue) {
    let l = queue.length
    for(let i=0; i<l; i++) {
      let cur = queue.shift()
      // 判断是否到达终点
      if(cur.left==null && cur.right==null) return height
      if(cur.left) queue.push(cur.left)
      if(cur.right) queue.push(cur.right)
    }
    // 在这里增加步数
    height++
  }
  return height
};
// @lc code=end

