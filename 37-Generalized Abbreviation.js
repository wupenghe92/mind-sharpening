//leetcode 320


//input  string
//output array of strings

// Input: “word”
// Output:
// [“word”, “1ord”, “w1rd”, “wo1d”, “wor1", “2rd”, “w2d”, “wo2”, “1o1d”, “1or1”, “w1r1", “1o2”, “2r1", “3d”, “w3", “4”]

// function GeneralizedAbbreviation(s) {
//   if (s === '') return [];
//   if (s.length === 1) return [s, '1']
//   const result = [];
//   const rest = GeneralizedAbbreviation(s.substring(1));
// }

function GeneralizedAbbreviation(s) {
  if (s === '')  return [''];
  const result = {};
  for (let i=0; i<Math.pow(2,s.length); i++) {
    let b = i.toString(2);
    if (b.length < s.length) b = ('0').repeat(s.length - b.length) + b;
    const p = b.split('');
    let str = '';
    let count = 0;
    for (let j=0; j<p.length; j++) {
      if (p[j] === '0') {
        if (count !== 0) str+=count;
        str+=s[j];
        count = 0;
      } else {
        count++;
      }
    }
    if (count !== 0) str+=count;
    result[str] = true;
  }
  return Object.keys(result);
}

console.log(GeneralizedAbbreviation('word'));
