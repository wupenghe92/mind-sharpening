//https://leetcode.com/problems/shuffle-an-array/description/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.origin = nums.slice();
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.nums = this.origin.slice();
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
// brutal force
// Solution.prototype.shuffle = function() {
//   const newArr = Array(this.nums.length);
//   const idx = [];
//   for (let i=0; i<this.nums.length; i++) {
//     idx.push(i);
//   }
//   for (let j=0; j<this.nums.length; j++) {
//     let i = Math.floor(Math.random()*(idx.length));
//     newArr[idx[i]] = this.nums[j];
//     idx.splice(i,1);
//   }
//   this.nums = newArr;
//   return this.nums;
// };


//Fisher-Yates Algorithm
Solution.prototype.shuffle = function() {
  for (let i=0; i<this.nums.length; i++) {
    let remain = this.nums.length - i;
    let newIdx = Math.floor(Math.random()*remain + i);
    let buffer = this.nums[newIdx];
    this.nums[newIdx] = this.nums[i];
    this.nums[i] = buffer;
  }
  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
