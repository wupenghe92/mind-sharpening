/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];
    const ans = [];
    const dir = [[0,1], [1,0], [0,-1], [-1,0]];
    const m = matrix.length;
    const n = matrix[0].length;
    let num = 0;
    const visited = {};
    let d = 0;
    let i=0, j=0;
    while (num < m*n) {
        ans.push(matrix[i][j]);
        visited[`${i}-${j}`] = 1;
        num++;
        let ii = i + dir[d][0];
        let jj = j + dir[d][1];
        if (visited[`${ii}-${jj}`] || ii>=m || ii<0 || jj>=n || jj<0) {
            d = (d+1) % 4;
            ii = i + dir[d][0];
            jj = j + dir[d][1];
        }
        i = ii;
        j = jj;
    }
    return ans;
};
