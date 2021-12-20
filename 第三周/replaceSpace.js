/**
 * @param {string} s
 * @return {string}
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 */
 var replaceSpace = function(s) {
  s = s.split('')
  let oldLen = s.length;
  let spaceCount = 0;
  for (let i = 0;i < oldLen ;i++) {
    if (s[i] === ' ') spaceCount += 1;
  }

  s.length += spaceCount * 2;
  for (let i = oldLen - 1,j = s.length - 1; i >= 0; i--,j--) {
    if (s[i] !== ' ') {
      s[j] = s[i]
    } else {
      s[j - 2] = '%'
      s[j - 1] = '2'
      s[j] = '0'
      j -= 2;
    }
  }
  return s.join('')
};

console.log(replaceSpace('We are happy.'))

console.log(replaceSpace('  '))
