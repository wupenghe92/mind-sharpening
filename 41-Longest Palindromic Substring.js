//https://leetcode.com/problems/longest-palindromic-substring/solution/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = s.length > 0 ? s[0] : '';
  const dp = [];
  const n = s.length;
  for (let i=0; i<n; i++) {
    dp.push(Array(n).fill(0));
    dp[i][i] = true;
  }

  for (let i=0; i<n-1; i++) {
    dp[i][i+1] = (s[i] === s[i+1]);
    if (dp[i][i+1]) {
      res = s.substring(i, i+2);
    }
  }

  for (let i=0; i<n-1; i++) {
    for (let j=i+1; j<n; j++) {
      if (dp[i][j] === 0) {
        fillUpdp(i, j);
        if (dp[i][j] && (j-i+1 > res.length)) {
          res = s.substring(i, j+1);
        }
      }
    }
  }
  return res;

  function fillUpdp(i, j) {
    if (dp[i][j] !== 0) return dp[i][j];
    dp[i][j] = (s[i] === s[j]) && fillUpdp(i+1, j-1);
    return dp[i][j];
  }
};
