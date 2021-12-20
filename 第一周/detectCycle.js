/**
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 1. 哈希表存储
var detectCycle = function(head) {
  const visited = new Set();
  while(head) {
    if (visited.has(head)) {
      return head;
    }
    visited.add(head);
    head = head.next;
  }
  return null;
};

// 2. 快慢指针
var detectCycle = function(head) {
  if (!head) {
    return null;
  }
  let slow = head;
  let fast = head;
  while(fast) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }

    if (fast === slow) {
      let ptr = head;
      while(ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};


var detectCycle = function(head) {
  
};