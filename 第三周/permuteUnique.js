/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 */
var permuteUnique = function(nums) {
  const res = [];
  let path = [];
  nums.sort((a, b) => a - b);

  const dfs = (used) => {
    if (path.length === nums.length) {
      return res.push(path.slice())
    }

    for (let i = 0; i < nums.length;i++) {
      if (i > 0 && nums[i] === nums[i -1] && !used[i - 1]) {
        continue;
      }
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        dfs(used);
        path.pop();
        used[i] = false;
      }
    }
  }
  
  dfs([])

  return res;
};

console.log(permuteUnique([1,1,2])) // [[1,1,2],[1,2,1],[2,1,1]]
console.log(permuteUnique([1,2,3])) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]