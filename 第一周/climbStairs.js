/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   let dp = []
//   dp[1] = 1;
//   dp[0] = 1;
//   for (let i = 2;i <= n;i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n]
// };
var climbStairs = function(n) {
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(5))
console.log(climbStairs(15))