/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


// 1. 
// var merge = function(nums1, m, nums2, n) {
//   const nums2Tmp = nums2.splice(0, n);
//   nums1.splice(m, nums1.length - m, ...nums2Tmp);
//   nums1.sort((a, b) => a - b);
//   return nums1;
// };


// 2 双指针

// var merge = function(nums1, m, nums2, n) {
//   let p1 = 0, p2 = 0;
//   const sorted = new Array(m + n).fill(0);
//   var cur;
//   while (p1 < m || p2 < n) {
//       if (p1 === m) {
//           cur = nums2[p2++];
//       } else if (p2 === n) {
//           cur = nums1[p1++];
//       } else if (nums1[p1] < nums2[p2]) {
//           cur = nums1[p1++];
//       } else {
//           cur = nums2[p2++];
//       }
//       sorted[p1 + p2 - 1] = cur;
//   }
//   for (let i = 0; i < m + n; ++i) {
//       nums1[i] = sorted[i];
//   }
// };

// 逆向双指针

var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1;
  let tail = m + n - 1;
  let cur;
  while(p1 >= 0 || p2 >= 0) {
      if (p1 === -1){
          cur = nums2[p2--];
      } else if (p2 === -1) {
          cur = nums1[p1--]
      } else if (nums1[p1] > nums2[p2]) {
          cur = nums1[p1--]
      } else {
        cur = nums2[p2--]
      }
      nums1[tail--] = cur;
    }
}


let nums1 = [1,5,6,0,0], nums2 = [21,56,0]
merge(nums1, 3, nums2, 2)
console.log(nums1);
