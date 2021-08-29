/**
 * @param {character[][]} grid
 * @return {number}
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 */

// DFS
// var numIslands = function(grid) {
//   let count = 0;
//   for (let i = 0;i < grid.length;i++) {
//     for (let j = 0; j < grid[0].length;j++) {
//       if (grid[i][j] === '1') {
//         count ++;
//         turnZero(i, j, grid);
//       }
//     }
//   }
//   return count
// };

// const turnZero = (i ,j, grid) => {
//   if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;
//   grid[i][j] = '0';
//   turnZero(i + 1, j, grid);
//   turnZero(i - 1, j, grid);
//   turnZero(i, j + 1, grid);
//   turnZero(i, j - 1, grid);
// }

// BFS

// var numIslands = function(grid) {
//   let count = 0;
//   let queue = []
//   for (let i = 0;i < grid.length;i++) {
//     for (let j = 0; j < grid[0].length;j++) {
//       if (grid[i][j] === '1') {
//         count ++;
//         grid[i][j] = '0' // 做标记，避免重复遍历
//         queue.push([i, j])
//         turnZero(queue, grid);
//       }
//     }
//   }
//   return count
// };
  
// const turnZero = (queue, grid) => {
//   const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
//   while(queue.length) {
//     const cur = queue.shift()
//     for (let dir of dirs) {
//       const x = cur[0] + dir[0];
//       const y = cur[1] + dir[1];
//       if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') {
//         continue
//       }
//       grid[x][y] = '0'
//       queue.push([x, y])
//     }
//   }
// }

var numIslands = function(grid) {
  let count = 0
  let queue = [];
  for (let i = 0;i < grid.length;i++) {
    for (let j = 0; j < grid[0].length;j++) {
      if (grid[i][j] === '1') {
        grid[i][j] = 0;
        count ++;
        queue.push([i, j]);
        turnZero(queue, grid);
      }
    }
  }
  return count;
};
  
const turnZero = (queue, grid) => {
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  while(queue.length) {
    const cur = queue.shift();
    for (let dir of dirs) {
      const x = cur[0] + dir[0];
      const y = cur[1] + dir[1];
      if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') {
        continue;
      }
      grid[x][y] = '0';
      queue.push([x, y])
    }
  }
}

let grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

console.log(numIslands(grid)) // 1

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log(numIslands(grid)) // 3