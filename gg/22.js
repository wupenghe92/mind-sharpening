/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) { ///dsdsdsds
  if (n <= 0) return [];

  const result = [];

  let left = n;
  let right = n;

  generate(left, right, '')

  return result;

  function generate(left, right, str) {
    if (str.length === n*2) {
      result.push(str);
      return;
    }

    if (left > 0) {
      generate(left-1, right, str+ '(');
    }

    if (right > left) {
      generate(left, right-1, str+ ')');
    }
    return;
  }
};
