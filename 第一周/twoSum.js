/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。 
 */
 var twoSum = function(nums, target) {
  // 创建一个map
  let map = new Map();
  // 遍历nums
  for (let i = 0; i < nums.length;i++) {
    // 如果map 里面有 target - nums[i] 的值的话 就是return 相应的下标 否则将对应的值的下面存到map
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])]
    } else {
      map.set(nums[i], i)
    }
  }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,2,4], 6))