/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 辅助栈
 var reversePrint = function(head) {
  let stack = []
  let res = []
  while(head) {
    stack.push(head.val)
    head = head.next;
  }

  while(stack.length) {
    res.push(stack.pop())
  }
  return res;
};

// 递归
var reversePrint = function(head) {
  if (!head) {
    return [];
  }
  const res = reversePrint(head.next);
  res.push(head.val);
  return res;
};