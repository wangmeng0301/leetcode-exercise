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
 * @return {number[][]}
 */
// 层序遍历
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  const res = [];
  while(queue.length) {
    let length = queue.length;
    let curLevel = []
    for (let i = 0 ; i < length; i++) {
      const node = queue.shift();
      curLevel.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(curLevel);
  }
  return res;
};
// 深度遍历
var levelOrder = function(root) {
  const res = [];

  const dfs = (node, depth, res) => {
    if (!node) {
      return;
    }
    if(!res[depth]) {
      res[depth] = []
    }

    res[depth].push(node.val);

    node.left && dfs(node.left, depth +1, res)
    node.right && dfs(node.right, depth +1, res)
  }

  dfs(root, 0, res);
  
  return res;
};