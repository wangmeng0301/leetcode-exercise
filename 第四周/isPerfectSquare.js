/**
 * @param {number} num
 * @return {boolean}
 * 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * 进阶：不要 使用任何内置的库函数，如  sqrt 。
 */
const isPerfectSquare = num => {
  let low = 0, high = num;
  while (low <= high) {
    let mid = (low + high) >>> 1;
    if (mid * mid > num) {
      high = mid - 1;
    } else if(mid * mid < num) {
      low = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(7));