/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 两个链表长度不同如何处理？
// 构建新节点而不是直接在原链表处理！
// 不要思考的太复杂，该使用空间就用空间
var addTwoNumbers = function(l1, l2) {
  let c = 0
  let head = new ListNode(0), tail = head
  // 注意这里的条件要加上进位
  while(l1 || l2 || c) {
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0
    let sum = val1 + val2 + c
    if(sum > 9) {
      tail.next = new ListNode(sum-10)
      tail = tail.next
      c = 1
    } else {
      tail.next = new ListNode(sum)
      tail = tail.next
      c = 0
    }
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
  }
  return head.next
};
// @lc code=end

