/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
// 快慢指针
 var removeDuplicates = function(nums) {
  if (!nums || nums.length == 0) {
    return 0;
  }

  // 都从下标是1的开始，
  let slow = 1;
  let fast = 1;

  // 快指针小于长度的时候进行循环
  while (fast < nums.length) {
    // 如果快指针的值 不等于快指针-1的值说明他们不相等了， 赋值到满指针的值上面
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      // 满指针 + 1
      slow += 1;
    }
    // 快指针 + 1
    fast+=1;
  }
  return slow;
};