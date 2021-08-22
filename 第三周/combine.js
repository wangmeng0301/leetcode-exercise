/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 */
 var combine = function(n, k) {
  const res = [];

  const recursion = (start, path) => { // start 是枚举选择的七点 path 是当前构建的路径
    if (path.length === k) { 
      return res.push(path.slice());
    }

    for (let i = start; i <= n; i++) { // 枚举出所有选择
      path.push(i); // 选择
      helper(i + 1, path); // 向下选择
      path.pop() // 撤销选择
    }
  }

  recursion(1, []); // 递归开始从1开始
  
  return res;
};

var combine = function(n, k) {
  const res = [];
  const helper = (start, path) => {
    if (path.length === k) {
      return res.push(path.slice())
    }

    for (let i = start;i <= n;i++) {
      path.push(i);
      helper(i + 1, path);
      path.pop();
    }
  }
  helper(1, [])
  return res;
};