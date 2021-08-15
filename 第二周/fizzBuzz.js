/**
 * @param {number} n
 * @return {string[]}
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 */

var fizzBuzz = function(n) {
  const res = [];
  for(let i = 1; i < n;i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      res.push('FizzBuzz');
    } else if (i % 3 === 0) {
      res.push('Fizz');
    } else if (i % 5 ===0 ) {
      res.push('Buzz');
    } else {
      res.push(i.toString());
    }
  }
  return res;
};