//https://leetcode.com/problems/largest-number/description/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const compare = function(a, b) {
    a = a.toString();
    b = b.toString();
    return a+b > b+a ? -1 : 1;
  }

  nums.sort(compare);
  const ans = nums.join('');
  return ans[0] === '0' ? '0' : ans;
};
