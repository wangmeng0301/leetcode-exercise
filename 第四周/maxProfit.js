/**
 * @param {number[]} prices
 * @return {number}
 * 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */
// 贪心算法
// var maxProfit = function(prices) {
//   let res = 0
//   for (let i = 1; i < prices.length;i++) {
//     res += Math.max(0, prices[i] - prices[i - 1]);
//   }
//   return res;
// };

// 动态规划
var maxProfit = function(prices) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
  dp[0][0] = 0, dp[0][1] = -prices[0];
  for (let i = 1; i < n;++i) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n-1][0];
};

console.log(maxProfit([7,1,5,3,6,4])) // 7
