/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

function wordBreak(s, wordDict) {
  const n = s.length;
  let arr = Array(n).fill(false);
  for (let i=0; i<n; i++) {
    for (let word of wordDict) {
      let l = word.length;
      if (l > i+1) continue;
      if ( (arr[i-l] || (i+1===l)) && s.substring(i-l+1, i+1) === word) {
        arr[i] = true;
      }
    }
  }
  return arr[n-1];
}
