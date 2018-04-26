//https://leetcode.com/problems/search-a-2d-matrix-ii/description/

// all checkings take O(n), can convert to O(logn) if using Divide and conquer method
function searchMatrix(matrix, target) {
  if(matrix.length === 0 || matrix[0].length === 0) return false;
  const m = matrix.length;
  const n = matrix[0].length;
  if (target < matrix[0][0]) return false;
  if (target === matrix[0][0]) return true;
  let i;
  for (i=0; i<Math.min(m,n); i++) {
    if (matrix[i][i] === target)  return true;
    if (matrix[i][i] < target)  continue;
    if (matrix[i][i] > target)  break;
  }
  if (i!==Math.min(m,n) && matrix[i][i]>target) {
    let subMatrix1=[], subMatrix2=[];
    for (let j=0; j<i; j++) {
      subMatrix1.push(matrix[j].slice(i))
    }
    for (let j=i; j<m; j++) {
      subMatrix2.push(matrix[j].slice(0,i))
    }
    return searchMatrix(subMatrix1, target) || searchMatrix(subMatrix2, target);
  } else {
    let subMatrix;
    if (m === n) return false;
    if (m > n)  subMatrix=matrix.slice(n);
    if (m < n) {
      subMatrix = [];
      for(let j=0; j<m; j++) {
        subMatrix.push(matrix[j].slice(m))
      }
    }
    return searchMatrix(subMatrix, target)
  }
}

let matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]

console.log(searchMatrix(matrix,10));


//best solution 
var searchMatrix = function(matrix, target) {
    if (matrix == null || matrix.length === 0) {
        return false;
    }
    if (matrix[0] == null || matrix[0].length === 0) {
        return false;
    }
    let row = 0;
    let col = matrix[0].length - 1;
    while(col >= 0 && row <= matrix.length - 1){
        if(target > matrix[row][col]){
            row++;
        }else if(target < matrix[row][col]){
            col--
        }else {
            return true;
        }
    }
    return false;
};
