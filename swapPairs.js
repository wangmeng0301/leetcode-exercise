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

// 1. 递归 
// var swapPairs = function(head) {
//   if (head === null && head.next === null) {
//     return head;
//   }

//   let newHead = head.next;
//   head.next = swapPairs(newHead.next);
//   newHead.next = head;
//   return newHead;
// };

// 2. 迭代
var swapPairs = function (head) {
  // 创建哑结点 dummyHead，令 dummyHead.next = head。
  const dummyHead = new ListNode(0);
  dummyHead.next = head;

  //  temp 表示当前到达的节点， 初始时 temp = dummyHead。每次需要交换 temp 后面的两个节点。
  let temp = dummyHead;
  
  while(temp.next !== null && temp.next.next !== null) {
    const node1 = temp.next;
    const node2 = temp.next.next;
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp = node1;
  }
  return dummyHead.next;
};
