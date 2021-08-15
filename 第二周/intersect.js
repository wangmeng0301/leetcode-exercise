// 1. 双指针
var intersect = function(nums1, nums2) {
  // 先排序
  nums1.sort((a,b) => a - b);
  nums2.sort((a,b) => a - b);
  // 创建一个临时的栈用来存放结果
  // 创建左右指针 默认是下标0
  let ans = [], l = 0; r = 0;
  console.log(nums1);
  // 遍历
  while(l < nums1.length && r < nums2.length) {
    // 值相同就放入到栈中
    if (nums1[l] === nums2[r]) {
      ans.push(nums1[l]);
      l++;
      r++;
    } else {
      // 不同的话 小的值的下标就++
      nums1[l] < nums2[r] ? l++ : r++;
    }
  }
  return ans;
}

// 2. 哈希表
var intersect = function(nums1, nums2) {
  let map = {};
  let res = [];
  for (let i = 0; i < nums1.length;i++) {
    if (map[nums1[i]]) {
      map[nums1[i]] = map[nums1[i]] + 1;
    } else {
      map[nums1[i]] = 1;
    }
  }


  for (let i = 0; i < nums2.length;i++) {
    if (map[nums2[i]] > 0) {
      res.push(nums2[i]);
      map[nums2[i]] = map[nums2[i]] - 1;
    }
  }
  return res;
}
console.log(intersect([1, 2, 2, 1], [2, 2]))