//https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const freq = {};
  let arr = [];
  for (let n of nums) {
    if (!freq[n]) freq[n]=1;
    else freq[n]++;
  }
  for (let n in freq) {
    if (arr.length < k) {
      arr.push([n,freq[n]]);
      if (arr.length === k) {
        arr.sort((a, b) => {
          return b[1]-a[1];
        })
      }
      continue;
    }
    if (arr[k-1][1] < freq[n]) {
      insert(n, freq[n], arr);
    }
  }
  const result = [];
  for (let i=0; i<k; i++) {
    result.push(Number(arr[i][0]))
  }
  return result;
};

function insert(n, f, arr) {
  const k = arr.length;
  arr[k-1] = [n, f];
  for (let i=k-1; i>0; i--) {
    if (arr[i][1] > arr[i-1][1]) {
      let buffer = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = buffer;
    } else {
      break;
    }
  }
  return;
}
