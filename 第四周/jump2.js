/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function(nums) {
//   let currentIndx = 0;
//   let nextIndex = 0;
//   let steps = 0;
//   for (let i = 0 ; i < nums.length - 1;i++) {
//     nextIndex = Math.max(nums[i] + i, nextIndex);
//     if (i === currentIndx) {
//       currentIndx = nextIndex;
//       steps++;
//     }
//   }
//   return steps;
// };

let nums = [2,3,1,1,4];
console.log(jump(nums)) // 2
nums = [2,1,1,1,4];
console.log(jump(nums)) // 2