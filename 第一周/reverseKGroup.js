/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * K 个一组翻转链表
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 进阶：
 * 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 */
const myReverse = function(head, tail) {
  let prev = tail.next;
  let p = head;
  while(prev !== tail) {
    const next = p.next;
    p.next = prev;
    prev = p;
    p = next;
  }
  return [tail, head];
}
 var reverseKGroup = function(head, k) {
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;

  while(head) {
    let tail = pre;
    // 查看剩余部分长度是否大于等于 k
    for (let i = 0;i < k;i++) {
      tail = tail.next;
      if (!tail){
        return hair.next;
      }
    }

    const nex = tail.next;
    [head, tail] = myReverse(head, tail);
    pre.next = head;
    tail.next = nex;
    pre = tail;
    head = tail.next;
  }
  return hair.next;
};