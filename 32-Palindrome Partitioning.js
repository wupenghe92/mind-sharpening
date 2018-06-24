//https://leetcode.com/problems/palindrome-partitioning/description/

/**
Given a string s, partition s such that every substring of the partition is a palindrome.
Return all possible palindrome partitioning of s.

 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  if (s.length === 0) return [];
  // if (s.length === 1) return [[s]];
  let ans = [];
  for (let i=0; i<s.length; i++) {
    let subs = s.substring(0,i+1);
    if (isPalindrome(subs)) {
      const restPartition = partition(s.substring(i+1));
      for (let j=0; j<resPartition.length; j++) {
        resPartition[j].unshift(subs);
        ans.push(resPartition[j]);
      }
    }
  }
  return ans;
};

function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}
