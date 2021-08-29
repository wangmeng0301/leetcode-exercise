/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let result = 0;
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let di = 0;
  let endX = 0;
  let endY = 0;
  let hash = {};
  for (let c = 0; c < obstacles.length;c++) {
    hash[`${obstacles[c][0]}-${obstacles[c][1]}`] = true;
  }
  for (let s = 0; s < commands.length;s++) {
    if (commands[s] === -2) {
      di = (di + 3) % 4;
    } else if (commands[s] === -1) {
      di = (di + 1) % 4;
    } else {
      for (let z = 1;z <= commands[s];z++) {
        let nextX = endX + dx[di];
        let nextY = endY + dy[di];
        if (hash[`${nextX}-${nextY}`]) {
          break;
        }
        endX = nextX;
        endY = nextY;
        result = Math.max(result, endY*endY + endX*endX)
      }
    }
  }
  return result;
};
console.log(robotSim([4,-1,3], [])); // 25

console.log(robotSim([4,-1,4,-2,4], [[2,4]])); // 65
