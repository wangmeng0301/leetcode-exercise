/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。 
 * 异位词：字符数量相同且顺序不同
 */

// 1. 先排序 排序后的两个字符串相等
// var isAnagram = function(s, t) {
//   return s.length !== t.length && [...s].sort().join('') === [...t].sort().join('');
// };

// 2. 用 map 存值计数，一个s里面有的就+1，t里面有的就 -1, 最后为0 就是异位词
// 1. 先排序 排序后的两个字符串相等
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const table = new Array(26).fill(0);

  for(let i = 0;i < s.length;i++) {
    table[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for(let i = 0;i < t.length;i++) {
    table[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    if (table[t.charCodeAt(i) - 'a'.codePointAt(0)] < 0) {
      return false;
    }
  }
  return true;
};

let s = "anagram", t = "nagaram";
console.log(isAnagram(s, t))