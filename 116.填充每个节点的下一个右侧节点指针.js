/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
	if(!root) return root
	connectTwo(root.left, root.right)
	return root
};

const connectTwo = (leftNode, rightNode) => {
	if(!leftNode || !rightNode) return 
	leftNode.next = rightNode
	connectTwo(leftNode.left,leftNode.right)
	connectTwo(leftNode.right,rightNode.left)
	connectTwo(rightNode.left,rightNode.right)
}
// @lc code=end

