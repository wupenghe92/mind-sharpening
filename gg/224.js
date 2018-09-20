/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let ans = 0;
    const signStack = [];
    const resStack =[];
    let num='', sign=1;
    for (let i=0; i<s.length; i++) {
        if (!isNaN(s[i]) && s[i] !== '') {
            num += s[i];
        } else if (s[i] === '+') {
            num = Number(num);
            ans += sign*num;
            num = '';
            sign = 1;
        } else if (s[i] === '-') {
            num = Number(num);
            ans += sign*num;
            num = '';
            sign = -1;
        } else if (s[i] === '(') {
            resStack.push(ans);
            signStack.push(sign);
            sign = 1;
            ans = 0;
        } else if (s[i] === ')') {
            num = Number(num);
            ans += sign*num;
            num = '';
            ans =  ans * signStack.pop() + resStack.pop();
        }
    }
    if (num.length > 0) ans += sign*Number(num);
    return ans;
};
