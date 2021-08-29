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

//BFS 
var generateParenthesis = function(n) {
  if (n === 0) return [];
  const res = [];
  let track = [];
  const backtrack = (left, right, track, res) => {
    if (left < 0 || right < 0) {
      return
    }
    if (right< left) return;
    if (left === 0 && right === 0)  {
      res.push(track.join(''));
      return 
    }

    track.push('(')
    backtrack(left - 1, right, [...track], res)
    track.pop()

    track.push(')')
    backtrack(left, right - 1, [...track], res)
    track.pop()
  }
  backtrack(n, n, track, res)
  return res;
};


console.log(generateParenthesis(3))