/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
*/

// 1. 排序
var majorityElement = function(nums) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)];
};

// 哈希
var majorityElement = function(nums) {
  let half = nums.length / 2;
  let map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
    if (map[num] > half) return num;
  }
};

// 栈
var majorityElement = function(nums) {
  let stack = [];
  for (let num of nums) {
    let m = stack.length;
    if (stack[m - 1] === num || !m) {
      stack.push(num);
    } else {
      stack.pop()
    }
  }
  return stack[0]
};

// 栈降维
var majorityElement = function(nums) {
  let x = 0;
  let m = 0;
  for (let n of nums) {
    if (m === 0) x = n;
    m += x === n ? 1 : -1;
  }
  return x
};

console.log(majorityElement([3,2,2,2,2,3,2,3,3]))