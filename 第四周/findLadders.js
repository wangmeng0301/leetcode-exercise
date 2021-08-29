/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 * 按字典 wordList 完成从单词 beginWord 到单词 endWord 转化，一个表示此过程的 转换序列 是形式上像 beginWord -> s1 -> s2 -> ... -> sk 这样的单词序列，并满足：
 * 每对相邻的单词之间仅有单个字母不同。
 * 转换过程中的每个单词 si（1 <= i <= k）必须是字典 wordList 中的单词。注意，beginWord 不必是字典 wordList 中的单词。
 * sk == endWord
 * 给你两个单词 beginWord 和 endWord ，以及一个字典 wordList 。请你找出并返回所有从 beginWord 到 endWord 的 最短转换序列 ，如果不存在这样的转换序列，返回一个空列表。每个序列都应该以单词列表 [beginWord, s1, s2, ..., sk] 的形式返回。
 */
var findLadders = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  wordSet.add(beginWord);
  if (!wordSet.has(endWord)) return []; // 单词表中灭有终点词，无法变到终点词

  const levelMap = new Map(); // 存放当前单词所在的蹭
  const wordMap = new Map(); // 存放档子的邻接单词
  const visited = new Set(); // 记录访问过的节点
  const queue = [beginWord]; // 维护一个队列。初始放入其电磁
  visited.add(beginWord); // 入队即访问，存入 visited;

  let finished = false; // 是否存在变化到终点词的路径
  let level = 0;
  levelMap.set(beginWord, 0); // 起始的level为0

  while(queue.length) {
    const levelSize = queue.length; // 当前 level 的单词的个数
    level++;
    for(let i = 0 ;i < levelSize; i++) {// 当前层的单词诸葛出列考察
      const word = queue.shift(); // 当前出列的单词

      for (let i = 0; i < word.length;i++) {
        for(let c = 97; c <= 122;c++) {
          const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
          if (!wordSet.has(newWord)) continue; // 不是单词表中的单词就忽略
          if (wordMap.has(newWord)) { // 新的单词已经存在于 wordMap
            wordMap.get(newWord).push(word) // 对应的数组推入出列的单词
          } else { // 初始化一个数组
            wordMap.set(newWord, [word]); // 放入父单词
          }

          if (visited.has(newWord)) continue; // 改新单词已经访问过就忽略掉
          if (newWord === endWord) { // 遇到了终点词
            finished = true // 存在抵达终点词的路径
          }

          levelMap.set(newWord, level); // 记录这个单词的levele
          queue.push(newWord); // 该新单词是下一层的，入列
          visited.add(newWord); // 入列即访问，记录一下
        }
      }
    }
  }

  if(!finished) return []; // 无法到达终点词， 返回 [];

  const res = [];
  const dfs = (path, biginWord, word) => {
    if (word === biginWord) { // 当前遍历的word 和起始词相同
      res.push([biginWord, ...path]) // 将当前路径推入res数组，加上起始词
      return;
    }
    path.unshift(word); // 将当前单词加入到path数组的开头
    if (wordMap.get(word)) { // 当前单词有对应的父单词们
      for (let parent of wordMap.get(word)) { // 遍历父单词们
        if (levelMap.get(parent) + 1 === levelMap.get(word)) { // 满足要求的
          dfs(path, beginWord, parent); // 递归dfs
        }
      }
    }
    path.shift(); // 回溯，撤销选择，将path数组开头的单词弹出
  }

  dfs([], beginWord, endWord) // dfs的入口

  return res;

};
let beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]

console.log(findLadders(beginWord, endWord, wordList));