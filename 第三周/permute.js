/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */
var permute = function(nums) {
  const res = [];
  const used = {};
  function dfs(path) {
    if (path.length === nums.length) {
      return res.push(path.slice());
    }
    for (const num of nums) {
      if (used[num]) continue;
      path.push(num);
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  }
  dfs([])
  return res;
};

console.log(permute([1,2,3])) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]