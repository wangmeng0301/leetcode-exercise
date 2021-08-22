/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 */

// 1. 遍历 每次移动k个 求里面的最大值
var maxSlidingWindow = function(nums, k) {
  if (k <= 1) {
    return nums;
  }
  const res = []
  for (let i = 0; i < nums.length - k + 1;++i) {
    res.push(Math.max(...nums.slice(i, i + k)));
  }
  return res;
};

// 单调队列（为了可以同时弹出队首和队尾的元素，我们需要使用双端队列。满足这种单调性的双端队列一般称作「单调队列」。）
var maxSlidingWindow = function(nums, k) {
  // 队列
  let q = [];
  // 结果数组
  let ans = [];
  for (let i = 0;i < nums.length;i++) {
    // 当队列不为空，并且当前元素大于等于队尾所存下标的元素，则弹出队尾,
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    };
    // 入队当前下标
    q.push(i);
    // 判断当前最大值（即队首元素），是否在窗口中，不在则出队。
    while (q[0] <= i - k) {
      q.shift();
    }
    if (i >= k - 1) {
      ans.push(nums[q[0]]);
    }
  }
  return ans;
};

// 单调队列（为了可以同时弹出队首和队尾的元素，我们需要使用双端队列。满足这种单调性的双端队列一般称作「单调队列」。）
var maxSlidingWindow = function(nums, k) {
  // 队列
  let q = []
  // 结果数组
  let ans = [];
  for (let i = 0; i < nums.length;i++) {
    // 当队列不为空，并且当前元素大于等于队尾所存下标的元素，则弹出队尾,
    while(q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    // 入队当前下标
    q.push(i)
    // 判断当前最大值（即队首元素），是否在窗口中，不在则出队。
    while(q[0] <= i - k) {
      q.shift()
    }
    if (i >= k - 1) {
      ans.push(nums[q[0]])
    }
  }
  return ans;
};

let nums = [1,3,-1,-3,5,3,6,7],  k = 3;

console.log(maxSlidingWindow(nums, k));