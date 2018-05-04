//https://leetcode.com/problems/product-of-array-except-self/description/

//Solve it without division and in O(n)

function productExceptSelf(nums) {
    let n = nums.length;
    const res = Array(n);
    res[0] = 1;
    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
}
