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
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */

// var swapPairs = function(head) {
//   if (head === null || head.next === null) {
//     return head;
//   }
//   const newHead = head.next;
//   head.next = swapPairs(newHead.next);
//   newHead.next = head;
//   return newHead;
// };

var swapPairs = function(head) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  prev = dummyHead;
  
  while(prev !== null && prev.next !== null && prev.next.next !== null) {
    let node1 = prev.next;
    let node2 = node1.next;
    let subHead = node2.next;

    node2.next = node1;
    node1.next = subHead;
    prev.next = node2;

    prev = node1; 
  }
  return dummyHead.next;
};

console.log(swapPairs([1,2,3,4])) // [2,1,4,3]
console.log(swapPairs([])) // []
console.log(swapPairs([1])) // [1]