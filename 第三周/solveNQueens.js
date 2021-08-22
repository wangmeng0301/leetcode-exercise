/**
 * @param {number} n
 * @return {string[][]}
 * 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 */
var solveNQueens = function(n) {
  const board = new Array(n);
  for (let i = 0; i < n; i++) { // 棋盘的初始化
    board[i] = new Array(n).fill('.');
  }
  const res = [];

  const isValid = (row, col) => {
    for (let i = 0;i < row; i++) { // 之前的行
      for (let j = 0;j < n; j++) { // 所有的列
        if (board[i][j] === 'Q' &&  // 发现的李皇后并且和自己同列/对角线
        (j == col || i + j == row + col || i - j === row - col)) {
          return false; // 不是合法的选择
        }
      }
    }
    return true;
  }

  const helper = (row) => { // 放置当前行的皇后
    if (row === n) { // 递归的出口
      const stringBoard = board.slice(); // 拷贝一份board
      for (let i = 0; i < n; i++) {
        stringBoard[i] = stringBoard[i].join('') // 将每一行拼成字符串
      }
      res.push(stringBoard);// 退出res数组
      return 
    }
    for (let col = 0 ; col < n ;col++) {// 枚举出所有选择
      if (isValid(row, col)) { // 剪掉无效的选择
         board[row][col] = 'Q'
         helper(row + 1);
         board[row][col] = '.'
      }
    }
  }
  helper(0)
  return res;
};