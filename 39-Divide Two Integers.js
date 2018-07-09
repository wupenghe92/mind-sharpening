// https://leetcode.com/problems/divide-two-integers/description/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 0 || (divisor === -1 && dividend === -2147483648) ) return 2147483647;
    if (divisor === 1) return dividend;
    if (divisor === -1) return -dividend;
    let res = 0;
    let s = 1;
    if (dividend < 0) {
      s = -s;
      dividend = -dividend;
    }

    if (divisor < 0) {
      s = -s;
      divisor = -divisor;
    }
    while(dividend >= divisor) {
      let temp = divisor;
      let multiplier = 1;
      while (dividend >= (temp<<1) ) {
        temp = temp << 1;
        multiplier = multiplier << 1;
      }
      res += multiplier;
      dividend -= temp;
    }
    if (s < 0) res = -res;
    return res;
};
