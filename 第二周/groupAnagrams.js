/**
 * @param {string[]} strs
 * @return {string[][]}
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母都恰好只用一次。
 */

// 1. 排序
// var groupAnagrams = function(strs) {
//   // 创建一个map
//   const map = new Map();
//   for (let i of strs) {
//     let array = Array.from(i);
//     array.sort();
//     let key = array.toString();
//     let list = map.get(key) ? map.get(key) : new Array();
//     list.push(i);
//     map.set(key, list);
//   }
//   return Array.from(map.values());
// };

// 2. 计数
var groupAnagrams = function(strs) {
  // 创建一个map
  const map = {};
  for (let i of strs) {
    const count = new Array(26).fill(0);
    for (let s of i) {
      count[s.charCodeAt() - 'a'.charCodeAt()]++
    }
    map[count] ? map[count].push(i) : map[count] = [i];
  }
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) // [[""]]