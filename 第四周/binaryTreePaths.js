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
 * @return {string[]}
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 * 叶子节点 是指没有子节点的节点。
 */

// 深度搜索遍历
var binaryTreePaths = function(root) {
  const paths = [];

  const dfs = (root, path) => {
    if (root) {
      path += root.val.toString();
      if (!root.left && !root.right) {
        paths.push(path)
      } else {
        path += '->'
        dfs(root.left, path)
        dfs(root.right, path)
      }
    }
  }

  dfs(root, '')

  return paths
};

// 广度搜索遍历
var binaryTreePaths = function(root) {
  const paths = [];
  if (!root) {
    return paths
  }

  const nodeQueue = [root];
  const pathQueue = [root.val.toString()]

  while(nodeQueue.length) {
    const node = nodeQueue.shift();
    const path = pathQueue.shift();

    if (!node.left && !node.right) {
      paths.push(path)
    } else {
      if (node.left) {
        nodeQueue.push(node.left)
        pathQueue.push(path + '->' + node.left.val.toString())
      }
      if (node.right) {
        nodeQueue.push(node.right)
        pathQueue.push(path + '->' + node.right.val.toString())
      }
    }
  }

  return paths
};
console.log(binaryTreePaths([1,2,3,null,5]))
console.log(binaryTreePaths([1]))