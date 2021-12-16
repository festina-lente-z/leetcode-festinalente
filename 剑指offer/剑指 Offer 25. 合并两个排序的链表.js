/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head = new ListNode(-1), p = head
  let p1 = l1, p2 = l2
  while(p1 && p2) {
      if(p1.val<p2.val){
          p.next = p1
          p = p.next
          p1 = p1.next
      } 
      else {
          p.next = p2
          p = p.next
          p2 = p2.next 
      }
  }
  if(p2) p.next = p2
  if(p1) p.next = p1
  return head.next
};