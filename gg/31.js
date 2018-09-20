/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  function swap(i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  function reverseAfterIdx(idx) {
    const shallowCopy = nums.slice(idx);
    shallowCopy.reverse();
    for (let k=idx; k<nums.length; k++) {
      nums[k] = shallowCopy[k-idx];
    }
  }

  let flag = 1;
  for (let i=nums.length-1; i>0; i--) {
    if (nums[i-1] < nums[i]) {
      flag = 0;
      let j = i;
      while (j<nums.length && nums[j]>nums[i-1]) {
        j++;
      }
      j--;
      swap(i-1, j);
      reverseAfterIdx(i);
      break;
    }
  }
  if (flag) nums.reverse();
  // return nums;
};
