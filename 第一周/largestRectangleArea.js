/**
 * @param {number[]} heights
 * @return {number}
 * 柱状图中最大的矩形
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 */
var largestRectangleArea = function(heights) {
  // 最大值
  let max = 0;
  // 栈用来存下标，这个栈是单调递增的栈
  let stack = [];
  heights = [0, ...heights, 0]
  // 前后加个0 保证第一个和最后一个值都比栈中的值小
  for (let i = 0; i < heights.length;i++) {
    // 当栈顶元素大于当前元素的时候出栈
    while(heights[i] < heights[stack[stack.length - 1]]) {
      // 存储出栈的inedex
      const top = stack.pop();
      max = Math.max(
        max,
        heights[top] * (i - stack[stack.length - 1] - 1)
      )
    }
    stack.push(i);
  }
  return max;
};

console.log(largestRectangleArea([2,1,5,6,2,3]))