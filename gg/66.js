/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let idx = digits.length - 1;
    while (idx >= 0 && digits[idx] === 9) {
        digits[idx] = 0;
        idx--;
    }

    if (idx >= 0) {
        digits[idx]++;
    } else {
        digits[0] = 1;
        digits.push(0);
    }
    return digits;
};
