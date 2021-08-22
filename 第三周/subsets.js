/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */
var subsets = function(nums) {
  let ans = [];
  let list = []
  const recursion = (index, nums) => {
    if (index === nums.length) {
      return ans.push(list.slice());
    }
    recursion(index + 1, nums);
    list.push(nums[index]);
    recursion(index + 1, nums);
    list.pop(nums.length - 1);
  }
  recursion(0, nums, [])
  return ans
};


// 迭代
var subsets = function(nums) {
  let ans = [[]]
  for (let i = 0; i < nums.length;i++) {
    let t = [];
    for (let j = 0; j < ans.length;j++) {
      t.push([...ans[j], nums[i]])
    }
    ans.push(...t)
  }
  return ans;
};


console.log(subsets([1,2,3])) // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])) // [[]. [0]];
