//https://leetcode.com/problems/search-for-a-range/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1,-1];
  if (nums.length === 1) {
    if (nums[0] === target) return [0,0];
    else return [-1,-1];
  }
  let left, right, mid;
  left = 0;
  right = nums.length - 1;
  while (left !== right-1) {
    mid = Math.floor((left+right)/2);
    if (nums[mid] === target) return expandRange(nums, target, mid);
    if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if (nums[left] === target) return expandRange(nums, target, left);
  if (nums[right] === target) return expandRange(nums, target, right);
  return [-1,-1];
};

function expandRange(nums, target, idx) {
  let start = end = idx;
  while (nums[start] === target && start>=0) {
    start--;
  }
  while (nums[end] === target ) {
    end++;
  }
  return [start+1, end-1];
}
