//https://leetcode.com/problems/binary-tree-inorder-traversal/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];
  let result = [];
  result=result.concat(inorderTraversal(root.left));
  result.push(root.val);
  result=result.concat(inorderTraversal(root.right));
  return result;
};

//iterative method
function inorderTraversal(root) {
  if (!root) return [];
  const stack = [];
  const result = [];
  const visited = new Map();
  stack.push(root);
  while (stack.length > 0) {
    let node = stack[stack.length-1];
    if (node.left && !visited.has(node.left)) {
      stack.push(node.left);
      visited.set(node.left, true);
    } else {
      result.push(node.val);
      stack.pop();
      if (node.right) {
        stack.push(node.right);
      }
    }
  }
  return result;
}
