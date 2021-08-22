/**
 * @param {string} digits
 * @return {string[]}
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */
var letterCombinations = function(digits) {
  let k = digits.length;
  const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
  if (!k) {
    return []
  }
  if (k === 1) return map[digits].split('')
  const res = [], path = []

  const backtracking = (digits, k , a) => {
      if (path.length === k) {
        return res.push(path.join(''));
      }
      for (const v of map[n[a]]) {
        path.push(v);
        backtracking(n, k, a + 1);
        path.pop();
      }
  };
  backtracking(digits, k, 0);
  return res;
};

  

  