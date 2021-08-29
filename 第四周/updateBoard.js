/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 * 让我们一起来玩扫雷游戏！
 * 给定一个代表游戏板的二维字符矩阵。 'M' 代表一个未挖出的地雷，'E' 代表一个未挖出的空方块，'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的已挖出的空白方块，数字（'1' 到 '8'）表示有多少地雷与这块已挖出的方块相邻，'X' 则表示一个已挖出的地雷。
 * 现在给出在所有未挖出的方块中（'M'或者'E'）的下一个点击位置（行和列索引），根据以下规则，返回相应位置被点击后对应的面板：
 *  如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
 *  如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的未挖出方块都应该被递归地揭露。
 *  如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
 *  如果在此次点击中，若无更多方块可被揭露，则返回面板。
 */

// DFS
const dx = [-1, 0, 1, 1, 1, 0, -1, -1];
const dy = [1, 1, 1, 0, -1, -1, -1, 0];

// var updateBoard = function(board, click) {
//   const m = board.length
//   const n = board[0].length;
//   const isBound = (x,y) => x >= 0 && x < m && y >=0 & y < n;// 辅助函数

//   const update = (x, y) => {
//     if (!isBound(x, y) || board[x][y] !== 'E') return;
//     let count = 0;
//     for (let i = 0; i < 8;i++) {
//       const nX = x + dx[i];
//       const nY = y + dy[i];
//       if(isBound(nX, nY) && board[nX][nY] === 'M') {
//         count++;
//       }
//     }
//     if (count === 0) {
//       board[x][y] = 'B';
//       for (let i = 0 ; i < 8;i++) {
//         update(x + dx[i], y + dy[i]);
//       }
//     } else {
//       board[x][y] = count + '';
//     }
//   }
//   const [cX, cY] = click;
//   if (board[cX][cY] === 'M') {
//     board[cX][cY] = 'X';
//   } else {
//     update(cX,cY)
//   }
//   return board;
// };

var updateBoard = function(board, click) {
  const m = board.length
  const n = board[0].length;
  const isBound = (x,y) => x >= 0 && x < m && y >=0 & y < n;// 辅助函数

  const bfs = (x, y) => {
    const queue = [[x, y]];
    while(queue.length) {
      const [x, y] = queue.shift();
      let count = 0;
      for (let i = 0;i < 8;i++) {
        const nX = x + dx[i];
        const nY = y + dy[i];
        if (isBound(nX,nY) && board[nX][nY] === 'M') {
          count++;
        }
      }

      if (count === 0) {
        board[x][y] = 'B';
        for (let i = 0; i < 8; i++) {
          const nX = x + dx[i];
          const nY = y + dy[i];
          if (isBound(nX, nY) && board[nX][nY] === 'E') {
            board[nX][nY] = 'B';
            queue.push([nX, nY]);
          }
        }
      } else {
        board[x][y] = count + '';
      }
    }
  }

  const [cX, cY] = click;
  if (board[cX][cY] === 'M') {
    board[cX][cY] = 'X';
  } else {
    bfs(cX, cY);
  }

  return board;
};

const m = 
[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']];

const click = [3,0]
console.log(updateBoard(m, click))