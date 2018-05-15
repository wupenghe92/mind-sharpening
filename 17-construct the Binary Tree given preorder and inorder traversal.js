//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return build(0, 0, preorder.length-1, preorder, inorder);
};

function build(preStart, inStart, inEnd, preorder, inorder) {
  if (preStart > preorder.length - 1 || inStart > inEnd) {
    return null;
  }
  const root = new TreeNode(preorder[preStart]);
  let inIndex;
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === preorder[preStart]) {
      inIndex = i;
      break;
    }
  }

  root.left = build(preStart+1, inStart, inIndex-1, preorder, inorder);
  root.right = build(preStart+inIndex-inStart+1, inIndex+1, inEnd, preorder, inorder);

  return root;
}
