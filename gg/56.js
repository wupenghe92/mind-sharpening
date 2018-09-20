/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


 function mergeRanges(arr) {
   arr.sort( (a,b) => {
     return a[0] - b[0];
   })
   const result = [];
   result.push(arr[0]);
   let last = arr[0];
   for (let i=1; i<arr.length; i++) {
     if (arr[i][0] > last[1]) {
       last = arr[i];
       result.push(arr[i]);
     } else if (arr[i][1] > last[1]) {
       last[1] = arr[i][1];
     }
   }
   return result;
 }
