/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 */

// 深度优先搜索（DFS）
 var maxDepth = function(root) {
  if (!root) {
    return null;
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};

// 广度优先搜索（BFS）
const maxDepth = (root) => {
  if (!root) return 0;
  let queue = [root];
  let depth = 1;
  // 队列有长度的时候循环
  while(queue.length) {
    // 当前层节点的个数
    let leveSize = queue.length;
    // 节点依次出列
    for (let i = 0; i < leveSize;i++) {
      // 当前出列的节点
      let curr = queue.shift();
      // 如果节点有左孩子或右孩子就加到队列中，
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
    // 当前层所有节点已经出列，如果队列不为空，说明有下一层节点，depth+1
    if (queue.length) depth++;
  }
  return depth
};
