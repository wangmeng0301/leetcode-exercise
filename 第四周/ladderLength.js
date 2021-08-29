/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * 字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：
 * 序列中第一个单词是 beginWord 。
 * 序列中最后一个单词是 endWord 。
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典 wordList 中的单词。
 * 给你两个单词 beginWord 和 endWord 和一个字典 wordList ，找到从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0。
 */
// var ladderLength = function(beginWord, endWord, wordList) {
//   let wordSet = new Set(wordList);
//   const queue = [[beginWord, 1]]

//   while(queue.length) {
//     const [word, level] = queue.shift();  // 当前出列的单词
//     if (word === endWord) {
//       return level;
//     }

//     for (let i = 0 ; i < word.length; i++ ){
//       for (let c = 97; c <= 122;c++) {
//         const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
//         if (wordSet.has(newWord)) {
//           queue.push([newWord, level + 1]);
//           wordSet.delete(newWord);
//         }
//       }
//     }
//   }
//   return 0
// };

var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  let queue = [[beginWord, 1]];

  while(queue.length) {
    const [word, level] = queue.shift();
    if (word === endWord) {
      return level;
    }

    for (let i = 0; i < word.length;i++) {
      for (let c = 97;c <= 122; c++) {
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }
  return 0
};

let beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
console.log(ladderLength(beginWord, endWord, wordList)); // 5

beginWord = "ymain"
endWord = "oecij"
wordList = ["ymann","yycrj","oecij","ymcnj","yzcrj","yycij","xecij","yecij","ymanj","yzcnj","ymain"]
console.log(ladderLength(beginWord, endWord, wordList)); // 0

beginWord = "qa"
endWord = "sq"
wordList = ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]
console.log(ladderLength(beginWord, endWord, wordList)); // 5
