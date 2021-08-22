/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 1. 迭代
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// 2. 递归 
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let ret = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return ret;
};




var reverseList = function(head) {
  let prev = null;
  let cur = head;
  while(cur) {
    const nex = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nex;
  }
  return prev
};