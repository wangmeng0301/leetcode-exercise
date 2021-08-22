/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 1. 后序遍历
var lowestCommonAncestor = function(root, p, q) {
  if(!root || root === p || root === q) {
    return root
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
    return root;
  }
  if (!left) {
    return right
  }
  return left
};

// 2. dfs 
var lowestCommonAncestor = function(root, p, q) {
  let ans;
  const dfs = (root, p, q) => {
    if (!root) return null;
    const lson = dfs(root.left, p, q)
    const rson = dfs(root.right, p, q)
    if ((lson && rson)
      || ((root === p || root === q) && (lson || rson))) {
        ans = root
      }
    return lson || rson || (root === p || root === q);
  }
  dfs(root, p, q)
  return ans;
};