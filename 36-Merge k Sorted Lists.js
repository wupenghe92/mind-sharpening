//https://leetcode.com/problems/merge-k-sorted-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}

 Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

 */
const mergeKLists = function(lists) {
  if (lists.length === 0) return [];
  const heads = [];
  for (let i=0; i<lists.length; i++) {
    if (lists[i])  heads.push(lists[i]);
  }
  if (heads.length === 0) return [];
  let idx = findMin();
  let result = heads[idx];
  let current = result;
  updateHeads(idx);
  while(heads.length > 0) {
    idx = findMin();
    current.next = heads[idx];
    updateHeads(idx)
    current = current.next;
  }
  return result;

  function findMin() {
    let idx = 0;
    let min = heads[0].val;
    for (let i=1; i<heads.length; i++) {
      if (heads[i].val < min) {
        idx = i;
        min = heads[i].val;
      }
    }
    return idx;
  }

  function updateHeads(idx) {
    if (heads[idx].next !== null) {
      heads[idx] = heads[idx].next;
    } else {
      heads.splice(idx, 1);
    }
  }
};
