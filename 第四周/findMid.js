// var findMin = function(nums) {
//   let left = 0, right = nums.length - 1;
//   while(left < right) {
//     let mid = (left + right) >>> 1
//     if (nums[mid] < nums[right]) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return nums[left];
// };

var findMin = function(nums) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++){
      if (nums[i] < min){
          min = nums[i]
      }
  }
  return min;
};


console.log(findMin([4,5,6,7,1,2,3]))