/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  if (moves.length === 0) return true;
  let count = {
    'L' : 0,
    'R' : 0,
    'U' : 0,
    'D' : 0
  }
  for (let m of moves) {
    count[m]++;
  }
  return count['L']===count['R'] && count['U']===count['D'];
};
