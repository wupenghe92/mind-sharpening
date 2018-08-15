/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

  function inTheGrid(x, y) {
    const a = grid.length-1;
    const b = grid[0].length-1;
    if (x<0 || y<0 || x>a || y>b) return false;
    return true;
  }

  function util(i,j) {
    if (visited[`${i}-${j}`]) return;
    visited[`${i}-${j}`] = 1;
    if (grid[i][j] === '0') return;

    if (flag) {
      flag = 0;
      result++;
    }
    if (inTheGrid(i+1,j)) util(i+1,j);
    if (inTheGrid(i-1,j)) util(i-1,j);
    if (inTheGrid(i,j+1)) util(i,j+1);
    if (inTheGrid(i,j-1)) util(i,j-1);

    return;
  }

  const visited = {};

  let result = 0;
  let flag;
  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[0].length; j++) {
      flag = 1;
      util(i,j);
    }
  }
  return result;

};
