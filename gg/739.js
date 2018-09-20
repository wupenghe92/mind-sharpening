/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
    const stack = [];
    const ans = Array(t.length);
    for (let i=t.length-1; i>=0; i--) {
        while(stack.length>0 && t[stack[stack.length-1]]<=t[i] ) {
            stack.pop();
        }
        if (stack.length === 0) {
            ans[i] = 0;
        } else {
            ans[i] = stack[stack.length-1] - i;
        }
        stack.push(i);
    }
    return ans;
};
