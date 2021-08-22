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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  if (!root) {
    return null
  }

  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root
};

// 节点借还
const invertNode=function(root,left,right){
  let temp=left;
  left=right;
  right=temp;
  root.left=left;
  root.right=right;
}

// 前序遍历
var invertTree = function(root) {
  if (!root) {
    return null;
  }
  invertNode(root.left, root.right);
  invertTree(root.left);
  invertTree(root.left);
  return root
}


// 层序遍历 有问题
var invertTree = function(root) {
  let queue=[];
  if(root===null){
      return root;
  } 
  queue.push(root);
  while(queue.length){
      let length=queue.length;
      while(length--){
          let node=queue.shift();
          //节点处理逻辑
          invertNode(node,node.left,node.right);
          node.left&&queue.push(node.left);
          node.right&&queue.push(node.right);
      }
  }
  return root;
}
