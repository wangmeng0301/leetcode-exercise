// 递归
var inorderTraversal = function(root) {
  const res = [];
  const innerorder = (root) => {
    if (!root) {
      return;
    }
    innerorder(root.left);
    res.push(root.val);
    innerorder(root.right);
  }
  innerorder(root);
  return res;
};

// 迭代
var inorderTraversal = function(root) {
  const res = [];
  const stack = [];
  while(root || stack) {
    while(root) {
      stack.push(root);
      root.left;
    }
    root = stack.pop();
    res.push(root);
    root = root.right;
  }
  return res;
};