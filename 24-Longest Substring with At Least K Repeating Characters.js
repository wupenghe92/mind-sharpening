//https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
//Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if (k === 1) return s.length;
  let res = 0;
  for (let h=1; h<=26; h++) {
    let i = 0,
        j = 0,
        unique = 0,
        atLeastK = 0,
        count = Array(26).fill(0);

    while (j<s.length) {
      if (unique <= h) {
        let idx = s.charCodeAt(j) - ('a').charCodeAt();
        if (count[idx] === 0) unique++;
        count[idx]++;
        if (count[idx] === k) atLeastK++;
        j++;
      } else {
        let idx = s.charCodeAt(i) - ('a').charCodeAt();
        count[idx]--;
        if (count[idx] === 0) unique--;
        if (count[idx] === k-1) atLeastK--;
        i++;
      }
      if (atLeastK === unique && atLeastK === h)
      res = Math.max(res, j-i);
    }
  }
  return res;
};
