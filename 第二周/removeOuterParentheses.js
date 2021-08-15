
/**
 * @param {string} s
 * @return {string}
 */

// 计数
// https://leetcode-cn.com/problems/remove-outermost-parentheses/solution/ji-shu-fa-shan-chu-zui-wai-ceng-de-gua-h-55id/
var removeOuterParentheses = function(S) {
  let count = 0, ans = '';
  for(let i = 0; i < S.length;i++) {
    if (S[i] === '(' && count++ > 0) ans += '('
    if (S[i] === ')' && count-- > 1) ans += ')'
  }
  return ans;
};


console.log(removeOuterParentheses('(())((()))()')) 