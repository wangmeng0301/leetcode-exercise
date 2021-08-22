/**
 * @param {number} n
 * @return {string[]}
 */

 
//  var generateParenthesis = function(n) {
//   const res = [];

//   const generateDfs = (l, r, max, str) => {
//     if (l === max && r === max) {
//       return res.push(str);
//     }
//     if (l < max) {
//       generateDfs(l + 1, r, max, str + '(');
//     }
//     if (l > r) {
//       generateDfs(l, r + 1, max, str + ')');
//     }
//   }
  
//   // 当前层级, 最大层级，组成的字符串 s
//   generateDfs(0, 0, n, '');

//   return res;
// };

var generateParenthesis = function(n) {
  const res = [];

  const generateDfs = (l, r, max, s) => {
    if (l === max && r === max) {
      return res.push(s);
    }
    if (l < max) {
      generateDfs(l + 1, r, max, s + '(')
    }
    if (r < l) {
      generateDfs(l, r + 1, max, s + ')');
    }
  }

  // 当前层级, 最大层级，组成的字符串 s
  generateDfs(0, 0, n, '');

  return res;
};

console.log(generateParenthesis(3))