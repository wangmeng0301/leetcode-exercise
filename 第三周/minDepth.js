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
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点。
 */
 var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  if (!root.left) {
    return 1 + minDepth(root.right);
  }if (!root.right) {
    return 1 + minDepth(root.left);
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};


// 迭代
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  let depth = 0;
  let q = [root];
  while(true) {
    let size = q.length;
    depth++;
    while(size--) {
      const node = q.shift();
      if (!node.left && !node.right) return depth;
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
  }
};