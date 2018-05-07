//https://leetcode.com/problems/word-break/description/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

//Time Limit Exceeded
var wordBreak = function(s, wordDict) {
  if (wordDict.includes(s)) return true;
  for (let i=1; i<s.length; i++) {
    let s1 = s.substring(0,i);
    let s2 = s.substring(i);
    if (wordBreak(s1, wordDict) && wordBreak(s2, wordDict)) {
      return true;
    }
  }
  return false;
};

//https://leetcode.com/problems/word-break/discuss/43808/Simple-DP-solution-in-Python-with-description

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
