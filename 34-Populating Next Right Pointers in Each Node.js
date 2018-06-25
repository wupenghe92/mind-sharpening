//https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root) return;
  const arr = [];
  const queue = [root];
  let currNode;
  while (queue.length > 0) {
    currNode = queue.pop();
    arr.push(currNode);
    if (currNode.left !== null) queue.unshift(currNode.left);
    if (currNode.right !== null) queue.unshift(currNode.right);
  }
  for (let level=0; level<Math.log2(arr.length+1) ; level++) {
    let idxStart = Math.pow(2, level) - 1;
    let idxEnd = Math.pow(2, level+1) - 2;
    for (let i=idxStart; i<idxEnd; i++) {
      arr[i].next = arr[i+1];
    }
  }
  return;
};



//
var connect = function(root) {  
    if(root === null) return;

    if(root.left !==null) {
        root.left.next = root.right;
    }

    if(root.right !== null) {
        root.right.next = root.next === null? null : root.next.left;
    }

    connect(root.left);
    connect(root.right)
};
