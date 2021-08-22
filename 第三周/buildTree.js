/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 递归
var buildTree = function(preorder, inorder) {
   if (preorder.length === 0) {
     return null
   }
  // 先序遍历的第一个点就是跟节点
  let root = new TreeNode(preorder[0]);
  // 找到中序遍历中根节点的位置
  let mind = inorder.indexOf(preorder[0]);
  console.log(mind);
  root.left = buildTree(preorder.slice(1, mind + 1), inorder.slice(0, mind));
  root.right = buildTree(preorder.slice(mind + 1), inorder.slice(mind + 1));
  return root;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))