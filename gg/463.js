/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

  function inTheGrid(x, y) {
    const a = grid.length-1;
    const b = grid[0].length-1;
    if (x<0 || y<0 || x>a || y>b) return false;
    return true;
  }

  let res = 0;
  const visited = {};
  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[0].length; j++) {
      if (grid[i][j] === 1) {
        res += 4;
        if (inTheGrid(i+1,j) && grid[i+1][j]===1) res--;
        if (inTheGrid(i-1,j) && grid[i-1][j]===1) res--;
        if (inTheGrid(i,j+1) && grid[i][j+1]===1) res--;
        if (inTheGrid(i,j-1) && grid[i][j-1]===1) res--;
      };
    }
  }
  return res;
};
