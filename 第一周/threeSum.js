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

var threeSum = function(nums) {
  if (nums.length <= 2) {
    return []
  }
  const res = [];
  nums.sort((a, b) => a - b);
  let map = {};
  for (let i = 0; i < nums.length - 2;i++) {
    for (let j = i + 1; i < nums.length - 1;j++) {
      for (let k = i + 2; i < nums.length;k++) {
        if (nums[i] + nums[j] === -nums[k]) {
          let sumArr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          if (!map[sumArr]) {
            res.push(sumArr)
            map[sumArr] = true;
          }
        } 
      }
    }
  }
  return res;
}


// 双指针
// var threeSum = function(nums) {
//   if (nums.length <= 2) {
//     return []
//   }
//   let res = [];
//   // 先排序
//   nums.sort((a, b) => a - b);
//   // 遍历
//   for (let i = 0; i< nums.length - 2;i++) {
//     if (nums[i] > 0) break; // 如果当前数字大于0 则三数之和一定大于零
//     if (i > 0 && nums[i - 1] === nums[i]) continue;// 去重
//     // 左指针是比i大1
//     let l = i + 1
//     // 右指针是nums的长度 -1 
//     let r = nums.length - 1;
//     // 左指针小于右指针的时候循环
//     while(l < r) {
//       const sum = nums[l] + nums[r] + nums[i];
//       if (sum === 0) {
//         res.push([nums[i], nums[l], nums[r]]);
//         // 如果左指针小于右指针并且 左指针的值和左指针+1的值相等 就继续往右移，右指针同理
//         while(l < r && nums[l] === nums[l + 1]) l++;
//         while(l < r && nums[r] === nums[r + 1]) r--;
//         l++;
//         r--;
//       } else if(sum < 0) {
//         // sum 的值小于 0 说明数小了 左指针要变大
//         l++;
//       } else {
//         // sum 的值大于0 说明数大了 右指针要变小
//         r--;
//       }
//     }
//   }
//   return res;
// }

console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])) // []
console.log(threeSum([0])) // []