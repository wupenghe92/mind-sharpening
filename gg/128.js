/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length < 1) return 0;
    const hash = {};
    for (let i=0; i<nums.length; i++) {
        hash[nums[i]] = 1;
    }
    let res = 1;
    for (let i=0; i<nums.length; i++) {
        if (!hash[nums[i]-1]) {
            let streak = 1;
            let j = 1;
            while (hash[nums[i]+j]) {
                streak++;
                j++;
            }
            res = Math.max(streak, res);
        }
    }
    return res;
};
