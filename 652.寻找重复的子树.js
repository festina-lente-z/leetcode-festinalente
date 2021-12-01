/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 */

const res = require("express/lib/response");

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const map = new Map()
  const res = []
  const traverse = (root) => {
    if (!root) return '#'

    let left = traverse(root.left)
    let right = traverse(root.right)

    let subTree = root.val + ',' + left + right

    let freq = map.get(subTree) || 0
    
    if(freq == 1) {
      res.push(root)
    }
    map.set(subTree, freq+1)

    return subTree
  }
  traverse(root)
  return res
};

// @lc code=end

