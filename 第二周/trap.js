/**
 * @param {number[]} height
 * @return {number}
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */

// 1. 动态规划
// var trap = function(height) {
//   let n = height.length;
//   if (!n) {
//     return 0;
//   }

//   // 求出左边的最大值
//   const leftMax = new Array(n).fill(0);
//   leftMax[0] = height[0];
//   for (let i = 1; i < n;++i) {
//     leftMax[i] = Math.max(leftMax[i - 1], height[i]);
//   }

//   // 求出右边的最大值
//   const rightMax = new Array(n).fill(0);
//   rightMax[n - 1] = height[n - 1];
//   for (let i = n - 2; i >= 0;--i) {
//     rightMax[i] = Math.max(rightMax[i + 1], height[i]);
//   }

//   // 左边的和右边的做比较选一个小的出来 然后 减去height
//   let ans = 0;
//   for (let i = 0; i < n;++i) {
//     ans += Math.min(leftMax[i], rightMax[i]) - height[i];
//   }

//   return ans;
// };

// 2. 单调栈
var trap = function(height) {
  let ans = 0;
  const stack = [];
  const n = height.length;

  for (let i = 0 ; i < n; ++i) {
    while(stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (!stack.length) {
        break;
      }
      // 找到左边的墙的下标
      const left =  stack[stack.length - 1];
      // 当前的宽度
      const currentWidth = i - left - 1;
      const currentHeight = Math.min(height[left], height[i]) - height[top];
      ans += currentWidth * currentHeight;
    };
    stack.push(i);
  }

  return ans;
};

// 2. 双指针
var trap = function(height) {
  let ans = 0;
  let left_max = 0 //左边的最大值，它是从左往右遍历找到的
  let right_max = 0 //右边的最大值，它是从右往左遍历找到的
  let left = 0 //从左往右处理的当前下标
  let right = height.length - 1 //从右往左处理的当前下标
  while (left < right) {
    if (height[left] < height[right]) {
      left_max = Math.max(left_max, height[left]);
      ans += left_max - height[left];
      left++;
    } else {
      right_max = Math.max(right_max, height[right]);
      ans += right_max - height[right];
      right--
    }
  }
  return ans;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));