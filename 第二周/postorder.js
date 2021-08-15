/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

// 遍历
var postorder = function(root) {
  const res = [];
  const innerPost = (innerRoot) => {
    if (!innerRoot) {
      return;
    }
    for(let i = 0; i < innerRoot.children.length;i++) {
      innerPost(innerRoot.children[i]);
    }
    res.push(innerRoot.val)
  }
  innerPost(root)
  return res;
};

// 迭代
var postorder = function(root) {
  const res = [];
  const stack = [];
  if (!root) return res;

  // 将根节点入栈
  stack.push(root);
  // 栈有值的时候遍历
  while (stack.length) {
    // 将第一个节点出栈
    const node = stack.pop();
    // 存下节点
    res.push(node.val);
    // 将所有子节点入栈
    stack.push(...node.children);
  }
  // 反转
  return res.reverse();
};