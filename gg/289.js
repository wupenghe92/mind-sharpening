/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let m = board.length, n=board[0].length;
    const copy = [];
    for (let i=0; i<m; i++) {
        copy.push([]);
        for (let j=0; j<n; j++) {
            let next = 0;
            let num = liveNum(i, j);
            console.log(num);
            if (num===3 || (num===2 && board[i][j])) {
                next = 1;
            }
            copy[i][j] = next;
        }
    }

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            board[i][j] = copy[i][j];
        }
    }
    return;



    function liveNum(x, y) {
        let ans = 0;
        const surroundings = [[-1,0],[1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]];
        for (let i=0; i<8; i++) {
            let xx = x + surroundings[i][0];
            let yy = y + surroundings[i][1];
            if (xx<m && xx>=0 && yy<n && yy>=0 && board[xx][yy]) {
                ans++
            }
        }
        return ans;
    }
};
