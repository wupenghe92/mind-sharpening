/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let c = 0;
  const stack = [];
  const visited = new Map();
  stack.push(root);
  visited.set(root, true);
  while (stack.length > 0) {
    let last = stack[stack.length-1];
    if (last.left && !visited.has(last.left)) {
      stack.push(last.left);
      visited.set(last.left, true);
    } else {
      stack.pop();
      c++;
      if (c === k) return last.val;
      if (last.right) stack.push(last.right);
    }
  }
  return;
};
