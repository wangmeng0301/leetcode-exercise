/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// JSON.stringify当在循环引用时会抛出异常TypeError ("cyclic object value")（循环对象值）
 var hasCycle = function(head) {
  try {
      JSON.stringify(head)
      return false
  } catch {
      return true
  }
};


// 题目说了范围不超过100000，没超过size能发现空节点就是没有环， 超过了就是有环！！！
const hasCycle = function(head) {
  let i = 0, size = 100000
  let node = head
  while (++i <= size) {
    if(!node) return false
    node = node.next
  }
  return true;
};

// 暴力破解法
var hasCycle = function(head) {
  let cur1 = head;
  let step1 = 0;
  while(cur1) {
    step1++;
    let cur2 = head;
    let step2 = 0;
    while (cur2) {
      step2++;
      if (cur1 === cur2) {
        if (step2 === step1) {
          break;
        } else {
          return true;
        }
      }
      cur2 = cur2.next; 
    }
    cur1 = cur1.next; 
  }
  return false;
};

// 把经过的节点存到 map 如果有重复的节点就是有环
var hasCycle = function(head) {
  const map = new Map();
  while(head) {
    if (map.has(head)) {
      return true;
    } else {
      map.set(head, true);
      head = head.next;
    }
  }
  return false;
};

// 快慢指针 
// 慢的每次走一步 快的走两步 相遇了就是有环
var hasCycle = function(head) {
  if (!head) return false;
  let slowp = head;
  let quickp = head;
  while(quickp.next !== null && quickp.next.next !== null) {
    slowp = slowp.next;
    quickp = quickp.next.next;
    if (slowp === quickp) {
      return true;
    }
  }
  return false;
};
