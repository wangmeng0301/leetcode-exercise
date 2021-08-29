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
 * @return {number[]}
 * 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
 */
 var largestValues = function(root) {
  let res = [];
  let queue = [root]
  while(queue.length) {
    let length = queue.length
    let levelMax = 0;
    for (let i = 0; i < length;i++) {
      const node = queue.pop();
      levelMax = Math.max(levelMax, node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(levelMax);
  }
  return res;
};