/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//   if (x < 2) {
//     return x;
//   }
//   let left = 1, mid, right = Math.floor(x / 2);
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     if (mid * mid === x) return mid;
//     if (mid * mid < x) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return right
// };

// // 牛顿-拉弗森迭代法
// var mySqrt = function(x) {
//   if (x < 2) {
//     return x;
//   }
//   let mid = x;
//   var sqrt = function(x) {
//     var sqrtx = (x + mid / x) / 2;
//     if (sqrtx === x) {
//       return parseInt(x);
//     } else {
//       return sqrt(sqrtx)
//     }
//   }
//   return sqrt(x);
// }

// console.log(mySqrt(4));
// console.log(mySqrt(9));


// 循环有序数组找出分界点[7,8,9,0,1,2,3,4,5,6]
var findMid = (arr) => {
  if (arr.length < 2) {
    return arr[0];
  }
  let mid, left = 0, right = arr.length - 1;

  while(left <= right) {
    mid = Math.floor((right + left) / 2);
    if (arr[mid] >= arr[mid + 1]) {
      return arr[mid];
    } else if (arr[mid] <= arr[left]) {
      right = mid - 1;
    } else if (arr[mid] >= arr[right]) {
      left = mid + 1;
    } else {
      return -1;
    }
  }
  return -1
}

console.log(findMid([7,1]));
console.log(findMid([7,8,9,0,1,2,3,4,5,6]));
console.log(findMid([7,8,9,10,11,2,3,4,5,6]));
console.log(findMid([7,8,9,10,11]));