/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
*/
// 在21题的基础上
var mergeKLists = function(lists) {
  let k = lists.length
  if(k==0) return null
  if(k==1) return lists[0]
  let two = lists[0]
  for(let i=1; i<k; i++){
    two = mergeTwo(two,lists[i])
  }
  return two
};
const mergeTwo = (l1, l2) => {
  let dummy = new ListNode(), p = dummy
  while(l1 && l2) {
    if(l1.val < l2.val) {
      p.next = l1
      l1 = l1.next
    } else {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }
  if(l1) p.next = l1
  if(l2) p.next = l2
  return dummy.next
}
// @lc code=end

