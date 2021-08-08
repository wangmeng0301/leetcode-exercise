/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 1 暴力破解 三重循环
// var threeSum = function(nums) {
//   if (nums.length <= 2) {
//     return [];
//   }
//   // 排序
//   nums.sort((a, b) => a - b);
//   var result = [];
//   // set 用来去重
//   let res = new Set();
//   // 第一次循环
//   for (let i = 0; i < nums.length - 2;i++) {
//     // 第二次循环
//     for (let j = i + 1; j < nums.length - 1;j++) {
//       // 第三次循环
//       for (let k = i + 2; k < nums.length;k++) {
//         if (nums[j] + nums[k] + nums[i] === 0) {
//           // 要去重, 用map去存 或者 存一个对象 存成key
//           res.add([nums[j], nums[k], nums[i]])
//         }
//       }
//     }
//   }
//   // 转成数组返回出来 
//   return Array.from(res);
// };


// 双指针
var threeSum = function(nums) {
  if (nums.length <= 2) {
    return []
  }
  let res = [];
  // 先排序
  nums.sort((a, b) => a - b);
  // 遍历
  for (let i = 0; i< nums.length - 2;i++) {
    if (nums[i] > 0) break;// 如果当前数字大于0 则三数之和一定大于零
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重
    // 左指针是比i大1
    let L = i + 1;
    // 右指针是nums的长度
    let R = nums.length - 1;
    // 左指针小于右指针的时候循环
    while(L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        res.push([nums[i],nums[L],nums[R]]);
        // 如果做指针小于右指针并且 左指针的值和左指针+1的值相等 就继续往右移，右指针同理
        while (L < R && nums[L] === nums[L + 1]) L++; // 去重
        while (L < R && nums[R] === nums[R - 1]) R--; // 去重
        L++;
        R--;
      } else if (sum < 0) { // sum 的值小于 0 说明数小了 左指针要变大
        L++;
      } else if (sum > 0) {// sum 的值大于0 说明数大了 右指针要变小
        R--;
      }
    }
  }
  return res;
}

console.log(threeSum([-1,0,1,2,-1,-4])) // [-1,0,1,2,-1,-4]
console.log(threeSum([])) // []
console.log(threeSum([0])) // []