//https://leetcode.com/problems/set-matrix-zeroes/description/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const zeros = {row:{}, col:{}};
  for (let i=0; i<m; i++) {
    for (let j=0; j<n; j++) {
      if (matrix[i][j] === 0) {
        zeros.row[i] = true;
        zeros.col[j] = true;
      }
    }
  }
  for (let i in zeros.row) {
    fillRow(Number(i));
  }
  for (let j in zeros.col) {
    fillCol(Number(j));
  }

  return;

  function fillRow(i) {
    matrix[i].fill(0);
  }

  function fillCol(j) {
    for (let i=0; i<m; i++) {
      matrix[i][j] = 0;
    }
  }
};
