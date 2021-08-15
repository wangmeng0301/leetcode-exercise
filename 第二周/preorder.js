/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */


// 递归
var preorder = function(root) {
  const res = [];
  const dfs = (root) => {
    if (!root) {
      return;
    }
    res.push(root.val);
    for (let i = 0;i < root.children.length;i++) {
      dfs(root);
    }
  }
  dfs(root)
  return res;
};

// 迭代

var preorder = function(root) {
  const res = [];
  const stack = []
  if (!root) return root;
  stack.push(root);
  while (stack.length) {
    const node = stack.shift();
    res.push(node.val);
    if (node.children.length > 0) {
      stack.unshift(...node.children);
    }
  }
  return res;
};