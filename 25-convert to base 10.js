/**
 * @param {String} base
 * @param {String} num
 * @return {Number}
 */
function convertTo10(base, num) {
  base = Number(base);
  num = num.toLowerCase();
  if (!base || base<2 || base>32 || !Number.isInteger(base)) {
    return 'Invalid base';
  }
  let result = 0;
  for (let i=num.length-1; i>=0; i--) {
    let digit = getDigits(num[i]);
    if (digit === false || digit >= base) return 'Invalid num';
    result = result + digit * Math.pow(base, num.length - i - 1);
  }
  return result;
}


function getDigits(char) {
  let digit
  let code = char.charCodeAt(0);
  // 0-9
  if (code >= 48 && code <= 57) {
    digit = code - 48;
  } else if (code >= 97 && code <= 122) {   //'a'-'z'
    digit = code - 87;                      // 10-35
  } else {
    digit = false;
  }
  return digit;
}


console.log(convertTo10('0.4', '123'));
console.log(convertTo10('10', '123'))
console.log(convertTo10('10', '1a'))
console.log(convertTo10('11', 'a'))
console.log(convertTo10('8', '12'))
console.log(convertTo10('16', 'fff'))
