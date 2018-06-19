//https://leetcode.com/problems/sliding-window-maximum/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return [];
  if (k === 1) return nums;
  if (nums.length <= k) return [Math.max(...nums)];
  const deque = []; // can be implementend as a double linked list in js
  const init = [];
  for (let i=0; i<k-1; i++) {
    const obj = {};
    init.push( {idx: i, val: nums[i]} );
  }
  init.sort( (a,b) => a.val - b.val);
  for (let obj of init) {
    deque.push(obj.idx);
  }

  const res = [];
  for (let i=k-1; i<nums.length; i++) {   // window [i-k+1 ,i]
    while (deque.length > 0 && (deque[deque.length-1] < i-k+1)) {
      deque.pop();
    }
    while (deque.length > 0 && nums[deque[0]] <= nums[i]) {
      deque.shift();
    }
    deque.unshift(i);
    res.push(nums[deque[deque.length-1]]);
  }
  return res;
};



// function Deque() {
//   this.length = 0;
//   this.head = null;
//   this.tail = null;
// }
