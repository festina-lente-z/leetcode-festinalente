/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // 设置虚拟头结点，之后返回head.next即可忽略现在创建的节点
  // 注意这题是merge，不是在原链表上改
  let head = new ListNode()
  let t = head

  // 设置两个指针分别指向两条链表
  let p = list1, q = list2
  // 两条链表有一条遍历完就结束
  while(p && q) {
    if(p.val < q.val) {
      t.next = p
      p = p.next
    } else {
      t.next = q
      q = q.next
    }
    t = t.next
  }
  // 把没遍历完的部分直接接到合并好的链表后面
  if(p) t.next = p
  if(q) t.next = q
  return head.next
};
// @lc code=end

