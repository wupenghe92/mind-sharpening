/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak2 = function(s, wordDict) {
    const arr = Array(s.length);
    for (let i=0; i<s.length; i++) {
        arr[i] = [];
    }

    for (let i=0; i<s.length; i++) {
        for (let word of wordDict) {
            const l = word.length;
            if (l > i+1)  continue;
            if (word === s.substring(i-l+1, i+1)) {
                if (l === i+1) {
                    arr[i].push(word);
                } else if (arr[i-l].length > 0) {
                    for (let k=0; k<arr[i-l].length; k++) {
                        arr[i].push(arr[i-l][k] + ' ' + word);
                    }
                }
            }
        }
    }
    return arr[s.length-1];
};

//

var wordBreak2 = function(s, wordDict) {
  const memory = {};
  const result = util(s);
  return result;

  function util(s) {
    if (memory[s]) return memory[s];
    const res = [];
    if (wordDict.includes(s)) res.push(s);

    for (let i=1; i<s.length; i++) {
      let word = s.substring(i);
      if (wordDict.includes(word)) {
          let prevStr = s.substring(0, i);
          const combined = combine(word, util(prevStr));
          for (let j=0; j<combined.length; j++) {
            res.push(combined[j]);
          }
      }
    }
    memory[s] = res;
    return res;

  }

  function combine(word, arr) {
    const ans = [];
    for (let i=0; i<arr.length; i++) {
      ans[i] = arr[i] + ' ' + word;
    }
    return ans;
  }


};
