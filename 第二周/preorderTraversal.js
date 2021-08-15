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
 */

// 递归
var preorderTraversal = function(root) {
  const res = [];
  const innerPerorder = (root) => {
    if (!root) {
      return;
    }
    res.push(root.val);
    innerPerorder(root.left)
    innerPerorder(root.right)
  }
  innerPerorder(root);
  return res;
};

// 迭代
var preorderTraversal = function(root) {
  const res = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    root = root.pop()
    root = root.right;
  }
  return res;
};