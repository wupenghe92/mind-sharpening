//https://leetcode.com/problems/trapping-rain-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */



function trap(height) {
  let water = 0;
  let left = 0;
  let right = height.length - 1;
  let left_max = height[left], right_max = height[right];
  while (left<right) {
    if (height[left] < height[right]) {
      if (height[left] > left_max) {
        left_max = height[left];
      } else {
        water = water + left_max - height[left];
      }
      left++;
    } else {
      if (height[right] > right_max) {
        right_max = height[right];
      } else {
        water = water + right_max - height[right];
      }
      right--;
    }
  }
  return water;
};
