/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 * 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;
  let index = g.length - 1;
  for (let i = s.length - 1; i >= 0;i--) {
    if(index >= 0 && s[i] >= g[index]) {
      count++;
    }
    index--;
  }
  return count;
};
console.log(findContentChildren([1,2,3], [1,1]))