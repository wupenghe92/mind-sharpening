function solution(X, Y, K, A, B) {
  const xarr = findLength(X, A);
  const yarr = findLength(Y, B);
  const pieces = [];
  for (let i=0; i<xarr.length; i++) {
    for (let j=0; j<yarr.length; j++) {
      pieces.push(xarr[i]*yarr[j]);
      // min-heap / prority queue
    }
  }
  pieces.sort( (a,b) => b-a); // O(n^2 * log(n^2))  vs O(n^2 * log(k))
  return pieces[K-1];
}

function findLength(L, positions) {
  const larr = [positions[0]];
  for (let i=1; i<positions.length; i++) {
    larr.push(positions[i] - positions[i-1]);
  }
  larr.push(L-positions[positions.length-1]);
  return larr;
}

// let X = 6,   Y = 7,   K = 3;
// const A = [1, 3]
// const B = [1, 5]

let X = 35 ,  Y = 38 ,  K = 15;
const A = [1, 3, 6, 11, 24, 26, 32]
const B = [1, 5, 8, 13, 16, 22, 26]


console.log(solution(X, Y, K, A, B));
