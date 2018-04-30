// https://leetcode.com/problems/longest-consecutive-sequence/description/
/**
 * @param {number[]} nums
 * @return {number}
 */

function longestConsecutive(nums) {
  const hash = {};
  let longestStreak = 0;
  for (let num of nums) {
    hash[num] = true;
  }

  for (let numStr in hash) {
    let currentNum = Number(numStr);
    if (!hash[currentNum-1]) {
      let currentStreak = 1;
      while (hash[currentNum+1]) {
        currentNum++;
        currentStreak++
      }
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    }
  }
  return longestStreak
};
