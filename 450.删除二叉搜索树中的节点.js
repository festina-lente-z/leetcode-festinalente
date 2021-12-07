/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
 */

const { del } = require("express/lib/application");

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if(!root) return root;
  // 假设待删除节点A的值是key
  if(root.val == key) {
    // 1.A是末端节点，直接删除
    // 2.A只有一个非空子节点，让孩子接替自己位置
    // 左节点为空，返回右节点，也就是让右节点接替自己的位置
    if(root.left == null) return root.right
    // 看末尾，一般情况是返回root，这里返回root.right
    // 说明root（被略过）直接被删除掉了
    if(root.right == null) return root.left
    // 3.为了不破坏BST性质
    // A找到右子树最小节点接替自己
    // 获得右子树最小节点
    let minRight = getMin(root.right)
    // 删除右子树最小节点
    root.right = deleteNode(root.right, minRight.val)
    minRight.left = root.left
    minRight.right = root.right
    root = minRight
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else {
    // 注意这里！左子树=deleteNode(root.left, key)
    // 因为deleteNode返回值类型是TreeNode
    root.left = deleteNode(root.left, key)
  }
  return root
};
// BST最左边就是最小节点
var getMin = function(node) {
  while(node.left) {
    node = node.left
  }
  return node
}
// @lc code=end

