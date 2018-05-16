//https://leetcode.com/problems/4sum-ii/description/


/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const hash = {};
  let res = 0;
  for (let i=0; i<A.length; i++) {
    for (let j=0; j<B.length; j++) {
      let sum = A[i] + B[j];
      if (hash[-sum]) {
        hash[-sum]++;
      } else {
        hash[-sum] = 1;
      }
    }
  }
  for (let i=0; i<C.length; i++) {
    for (let j=0; j<D.length; j++) {
      let sum = C[i] + D[j];
      if (hash[sum]) res+=hash[sum];
    }
  }
  return res;
};
