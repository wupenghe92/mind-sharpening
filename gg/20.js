/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pair = {};
    pair['['] = ']';
    pair['{'] = '}';
    pair['('] = ')';
    for (let i=0; i<s.length; i++) {
        if (s[i] === '}' || s[i] === ')' || s[i] === ']') {
            let last = stack.pop();
            if (pair[last] !== s[i]) return false;
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};
