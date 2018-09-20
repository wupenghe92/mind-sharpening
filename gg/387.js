/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const count = {};
    for (let i=0; i<s.length; i++) {
        if (count[s[i]]) {
            count[s[i]][0]++;
        } else {
            count[s[i]] = [1, i];
        }
    }
    const chars = Object.keys(count);
    console.log(chars)
    for (let i=0; i<chars.length; i++) {
        if (count[chars[i]][0] === 1) {
            return count[chars[i]][1];
        }
    }
    return -1;
};
