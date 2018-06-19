//
/**
  * @param {Array of 1-n} dayForBlossoming
  * @param {K}  LongGroupThreshold
  * @param {M}  NumberOfLongGroups

  * @return {latest day or -1}
*/

function solution(A, K, M) {
  const n = A.length;
  if (M > Math.floor(n+1)/2) return -1;
  if (M === 1) return n;
  let ans = -1;
  let numGroup = 0;
  const state = Array(n).fill(0);
  for (let i=0; i<n-1; i++) {
    const pos = A[i]-1;
    let leftLength = getGroupLengthAtP(state, pos-1);
    let rightLength = getGroupLengthAtP(state, pos+1);
    if (leftLength + rightLength + 1 >= K) {
      let num = 0;
      if (leftLength >= K ) num++;
      if (rightLength >= K) num++;
      numGroup = numGroup + 1 - num;
    }
    state[pos] = 1;
    if (numGroup === M) ans=i+1;
    // console.log(ans, state, numGroup)
  }
  return ans;
}

function getGroupLengthAtP(state, p) {
  let l;
  if (p>=0 && p<state.length && state[p]) {
    l = 1;
  } else {
    return 0;
  }
  let left = p-1;
  let right = p+1;
  while (left>=0 && state[left]) {
    l++;
    left--;
  }
  while (right<state.length && state[right]) {
    l++;
    right++
  }
  return l;
}


console.log(solution([1,2,7,6,4,3,5], 2, 2));

console.log(solution([1,4,3,2,5], 1, 3));
