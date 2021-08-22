/**
 * https://leetcode-cn.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 首先对整个数组实行翻转，这样子原数组中需要翻转的子数组，就会跑到数组最前面。
// 这时候，从 kk 处分隔数组，左右两数组，各自进行翻转即可。


// 数组翻转
let reverse = (nums, start, end) => {
  while(start < end) {
    [nums[start++], nums[end--]] = [nums[end], nums[start]];
  }
}
var rotate = function(nums, k) {
  k %= nums.length;
  //[7,6,5,4,3,2,1]
  reverse(nums, 0, nums.length - 1);
  // [5,6,7,4,3,2,1]
  reverse(nums, 0, k - 1);
  // [5,6,7,1,2,3,4]
  reverse(nums, k, nums.length - 1);
  return nums
};

// 使用额外的数组
var rotate = function (nums, k) {
  let n = nums.length;
  let newArr = [];
  for (let i = 0;i < nums.length;i++) {
    newArr[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < newArr.length;i++) {
    nums[i] = newArr[i];
  }
}
