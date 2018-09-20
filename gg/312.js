/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const arr = nums.slice();
    arr.push(1);
    arr.unshift(1);
    const dp = [];
    let n = nums.length + 2;
    for (let i=0; i<n; i++) {
        dp.push(Array(n));
    }
    return util(0, n-1);

    function util(left, right) {
        if (left+1 === right) return 0;
        if (dp[left][right] !== undefined) return dp[left][right];
        let ans = 0;
        for (let i=left+1; i<right; i++) {
            ans = Math.max(ans, arr[left]*arr[i]*arr[right] + util(left, i) + util(i, right));
        }
        dp[left][right] = ans;
        return ans;
    }
};
