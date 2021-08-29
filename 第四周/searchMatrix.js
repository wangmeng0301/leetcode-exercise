/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
  let x = matrix.length - 1, y = 0;
  while(x >= 0 && y < matrix[0].length) {
    if (matrix[x][y] === target) {
      return true
    } else if (matrix[x][y] > target) {
      x--
    } else if (matrix[x][y] < target) {
      y++
    }
  }
  return false
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
console.log(searchMatrix(matrix, target))