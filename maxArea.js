/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode-cn.com/problems/container-with-most-water/
 */
// 两层循环 去判断每一块的面积大小
//  var maxArea = function(height) {
//   let max = 0;
//   for (let i = 0; i < height.length - 1;i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let area = (j - i) * Math.min(height[i], height[j])
//       max = Math.max(max, area);
//     }
//   }
//   return max;
// };

// var maxArea = function(height) {
//   let max = 0;
//   for (let i = 0,j = height.length - 1; i < j;) {
//     let minHieght = height[i] < height[j] ? height[i++] : height[j--];
//     let area = (j - i + 1) * minHieght;
//     max = Math.max(max, area);
//   }
//   return max;
// };

// 双指针 两边往里收敛
// var maxArea = function(height) {
//   let max = 0;
//   // 循环，i从左开始，j从右边开始
//   for (let i = 0, j = height.length - 1; i < j;) {
//     // 每次往中间移动 若是高度更小了 面积肯定小了 所以就往里移动一个
//     let minHeight = height[i] < height[j] ? height[i++] : height[j--];
//     let area = (j - i + 1) * minHeight;
//     max = Math.max(max, area);
//   }
//   return max;
// }

console.log(maxArea([1,8,6,2,5,4,8,3,7]));