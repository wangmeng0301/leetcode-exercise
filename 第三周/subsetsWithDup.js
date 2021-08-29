/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 */
 var subsetsWithDup = function(nums) {
  let ans = [];
  nums.sort((a, b) => a - b);

  const backtracking = (startIndex, path) => {
    ans.push(path.slice());
    if (path.length === nums.length) {
      return;
    }
    for (let i = startIndex;i < nums.length;i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) { 
        continue;
      }
      path.push(nums[i]);
      backtracking(i + 1, path);
      path.pop()
    }
  }

  backtracking(0, []);
  return ans;
};

console.log(subsetsWithDup([1,2,2])) //输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])) //输出：[[],[0]]
