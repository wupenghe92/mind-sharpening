/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).

*/

function solution(A) {
  const obj = {};
  for (let n of A) {
    if (n > 0) {
      obj[n] = true;
    }
  }
  for (let i=1; i<=A.length+1; i++) {
    if (!obj[i]) return i;
  }
}





function solution(S) {
    let res = '';
    let len = 0;
    for (let i=0; i<S.length; i++) {
        if (S[i] !== ' ' && S[i] !== '-') {
            if (len%3 === 0 && len>0) {
                res += '-'
            }
            res += S[i];
            len++;

        }
    }
    if (len % 3 === 1) {
        res = res.substring(0, res.length-3) + '-' + res[res.length-3] + res[res.length-1];
    }
    return res;
}
