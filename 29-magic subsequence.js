// Complete the longestSubsequence function below.
function longestSubsequence(s) {
    const vowels = 'aeiou';
    let prevIdx = [-1, -1, -1, -1, -1];
    const len = Array(s.length).fill(0);
    let maxlen = 0;
    let startIdx = 0;
    while (s[startIdx] !== 'a') {
        startIdx++;
        if (startIdx === s.length) return 0;
    }
    let vowelIdx = startIdx;
    for (let j = 1; j<5; j++) {
        while (s[vowelIdx] !== vowels[j]) {
            vowelIdx++;
            if (vowelIdx === s.length) return 0;
        }
    }
    prevIdx[0] = startIdx;

    for (let i = startIdx; i < s.length; i++) {
        if (prevIdx[vowels.indexOf(s[i])] >= 0) {
            len[i] = 1 + len[prevIdx[vowels.indexOf(s[i])]];
        }
        prevIdx[vowels.indexOf(s[i])] = i;
        if (s[i] != 'a') {
            if (prevIdx[vowels.indexOf(s[i])-1] >= 0) {
                len[i] = Math.max(len[i], 1+len[prevIdx[vowels.indexOf(s[i])-1]]);
            }
        }
        maxlen = Math.max(maxlen, len[i]);
    }
    // console.log(len)
    return maxlen;
}
