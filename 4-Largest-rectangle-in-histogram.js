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


public class Solution {
    public int largestRectangleArea(int[] height) {
        int len = height.length;
        Stack<Integer> s = new Stack<Integer>();
        int maxArea = 0;
        for(int i = 0; i <= len; i++){
            int h = (i == len ? 0 : height[i]);
            if(s.isEmpty() || h >= height[s.peek()]){
                s.push(i);
            }else{
                int tp = s.pop();
                maxArea = Math.max(maxArea, height[tp] * (s.isEmpty() ? i : i - 1 - s.peek()));
                i--;
            }
        }
        return maxArea;
    }
}
