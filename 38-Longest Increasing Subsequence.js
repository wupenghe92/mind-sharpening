//https://leetcode.com/problems/longest-increasing-subsequence/description/


public class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        int[] dp = new int[nums.length];
        dp[0] = 1;
        int maxans = 1;
        for (int i = 1; i < dp.length; i++) {
            int maxval = 0;
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    maxval = Math.max(maxval, dp[j]);
                }
            }
            dp[i] = maxval + 1;
            maxans = Math.max(maxans, dp[i]);
        }
        return maxans;
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */

function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;
  const dp = [1];
  for (let i=1; i<nums.length; i++) {
    let maxi = 1;
    for (let j=0; j<i; j++) {
      if (nums[j] < nums[i]) {
        maxi = Math.max(maxi, dp[j]+1);
      }
    }
    dp[i] = maxi;
  }
  return Math.max(...dp);
}
