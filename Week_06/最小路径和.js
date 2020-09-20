var minPathSum = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let rows = grid.length;
  let columns = grid[0].length;

  let dp = [];
  for (let i = 0; i < rows; i++) {
    dp.push([]);
    for (let j = 0; j < columns; j++) {
      dp[i].push(0);
    }
  }
  console.log("_________", dp);
  dp[0][0] = grid[0][0];
  //遍历首列下的所有行
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  //遍历首行下所有列
  for (let i = 1; i < columns; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  //遍历横竖上两个值，取出它们最小的一个，和自己相加
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[rows - 1][columns - 1];
};

var mbox = minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
console.log("ddd", mbox);
