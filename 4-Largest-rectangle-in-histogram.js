//https://leetcode.com/problems/largest-rectangle-in-histogram/description/

const largestRectangleArea = function(heights) {
  let max = 0;
  const n = heights.length;
  for (let i=0; i<n; i++) {
    let len = 1;
    for (let j=i+1; j<n; j++) {
      if (heights[j] >= heights[i]) len++;
      else break;
    }
    for (let j=i-1; j>=0; j--) {
      if (heights[j] >= heights[i]) len++;
      else break;
    }
    if (heights[i]*len > max) max=heights[i]*len;
  }
  return max;
}
