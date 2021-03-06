

/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 示例:
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 说明:必须在原数组上操作，不能拷贝额外的数组。尽量减少操作次数。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 暴力破解 两层循环
// var moveZeroes = function(nums) {
//   for (let i = 0; i < nums.length;i++) {
//     for (let j = i; j < nums.length;j++) {
        // nums[i] 不是0 的时候 并且 i 不等 j 的时候
//       if (nums[i] === 0 && i !== j) {
//         [nums[j], nums[i]] = [nums[i], nums[j]]
//       }
//     }
//   }
// };

// var moveZeroes = function(nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length;i++) {
//     if (nums[i] !== 0) {
//       nums[j] = nums[i];
//       if (j !== i) {
//         nums[i] = 0
//       }
//       j++;
//     }
//   }
//   return nums;
// };

// var moveZeroes = function(nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length;i++) {
//     if (nums[i] !== 0) {
//       [nums[j], nums[i]] = [nums[i], nums[j]]
//       j++;
//     }
//   }
//   return nums;
// };


// var moveZeroes = function(nums) {
//   let j =0; 
//   for (i = 0; i < nums.length;i++) {
//     if (nums[i] !== 0) {
//       nums[j] = nums[i]
//       if (j !== i) {
//         nums[i] = 0;
//       }
//       j++;
//     }
//   }
//   return nums
// }; 

// console.log(moveZeroes([0,1,0,3,12]))

// 1. loop count zeros
// const moveZeroes = function(nums) {
//   for (let i =0; i < nums.length - 1;i++) {
//     for (let j = i + 1; j < nums.length;j++) {
//       if (nums[i] === 0) {
//         [nums[j], nums[i]] = [nums[i], nums[j]]
//       }
//     }
//   }
//   return nums
// }
// 2. 开一个新的数组 loop
// const moveZeroes = function(nums) {
//   let res = new Array(nums.length).fill(0);
//   let j = 0;
//   for (let i = 0; i < nums.length;i++) {
//     if (nums[i]) {
//       res.splice(j, 1, nums[i]);
//       j++
//     }
//   }
//   nums = res;
//   return nums
// }
 //3. 直接进行index操作

const moveZeroes = function(nums) {
  let len = nums.length,l = 0, r = 0
  while(r < len) {
    if (nums[r] !==0) {
      [nums[r], nums[l]] = [nums[l], nums[r]]
      l++;
    }
    r++
  }
  return nums;s
}



console.log(moveZeroes([0,1,0,3,12]))
