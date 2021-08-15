/**
 * @param {number[]} heights
 * @return {number}
 * 柱状图中最大的矩形
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 */
 var largestRectangleArea = function(heights) {
  let max = 0
  let stack = [];
  heights = [0, ...heights, 0]
  for (let i = 0;i < heights.length;i++)  {
    while(heights[stack[stack.length - 1]] > heights[i]) {
      const top = stack.pop();
      max = Math.max(
        max,
        heights[top] * (i - stack[stack.length - 1] - 1)
      )
    }
    stack.push(i)
  }
  while(stack.length > 1){
    max = Math.max(max, heights[stack.pop()] * (heights.length - stack[stack.length-1] - 1));
  }
  return max;
};