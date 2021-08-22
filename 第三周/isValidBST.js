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
 * @return {boolean}
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 假设一个二叉搜索树具有如下特征：
 *  节点的左子树只包含小于当前节点的数。
 *  节点的右子树只包含大于当前节点的数。
 *  所有左子树和右子树自身必须也是二叉搜索树。
 */

// 按照定义递归
var isValidBST = function(root) {
  const dfs = (root, lower, upper) => {
    if (root === null) {
      return true;
    }
    if (root.val <= lower || root.val >= upper) {
      return false
    }
    return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper);
  }
  return dfs(root);
};

// 基于栈中序遍历
var isValidBST = function(root) {
  const stack = [];
  let inorder = -Infinity;
  while(root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop()
    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
  return true
};

// 基于栈中序遍历
var isValidBST = function(root) {
  let inorder = -Infinity;
  let res = true
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    if (node.val <= inorder) return res = false;
    inorder = node.val;
    dfs(node.right)
  }
  dfs(root)
  return res
};